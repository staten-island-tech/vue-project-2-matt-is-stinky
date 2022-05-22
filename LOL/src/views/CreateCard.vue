<template>
  <div class="addCard">
    <h2>Create a New Card</h2>
    <form>
      <div class="inputs">
        <div class="input">
          <input
            class="title"
            type="text"
            v-model="blogTitle"
            placeholder="Title"
          />
        </div>
        <div class="input">
          <textarea
            class="contentData"
            v-model="blogHTML"
            placeholder="Content"
          />
        </div>
        <div class="input">
          <input
            class="input-file"
            type="file"
            ref="blogPhoto"
            id="blog-photo"
            accept="image/*"
            name="file"
            @change="fileChange"
          />
        </div>
      </div>
      <div v-show="error" class="error">{{ this.errorMsg }}</div>
    </form>
    <button @click="uploadBlog">Publish</button>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/auth";
import db from "../firebase/config";
/* import storage from "../firebase/config" */
export default {
  name: "Create-Post",
  components: {},
  data() {
    return {
      blogHTML: "",
      blogTitle: "",
      img1: "",
      blogPicture: null,
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    fileChange(event) {
      this.uploadValue = 0;
      this.img1 = null;
      this.blogPicture = event.target.files[0];
      this.onUpload();
    },
    onUpload() {
      this.img1 = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.blogPicture.name}`)
        .put(this.blogPicture);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.img1 = url;
            console.log(this.img1);
          });
        }
      );
    },
    async uploadBlog() {
      if (this.blogHTML !== "" && this.blogTitle !== "") {
        this.error = false;
        this.errorMsg = "";
        const dataBase = db.collection("posts").doc(this.id);
        await dataBase.set({
          postContent: this.blogHTML,
          postTitle: this.blogTitle,
        });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields!";
      return;
    },
  },
};
</script>

<style scoped>
</style>
