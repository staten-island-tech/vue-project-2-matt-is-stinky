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
            name="file" @change="fileChange"
          />
        </div>
      </div>
      <div v-show="error" class="error">{{ this.errorMsg }}</div>
    </form>
    <button @click="uploadBlog">Publish</button>
  </div>
</template>

<script>
import "firebase/auth";
import firebase from "firebase/compat/app";
/*import db from "../firebase/config";*/
/* import storage from "../firebase/config" */
export default {
  name: "Create-Post",
  components: {
  },
  data() {
    return {
      blogHTML: "",
      blogTitle: "",
      blogPicture: null,
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    fileChange() {
      this.file = this.$refs.blogPhoto.files[0]
      const filename = this.file.name
      console.log(filename)
      const imageLink = URL.createObjectURL(this.file)
      console.log(imageLink)
      return;
    },
    /*async uploadBlog() {
      if (this.blogHTML !== "" && this.blogTitle !== "") {
        this.error = false;
        this.errorMsg = "";
        const dataBase = db.collection("posts").doc(this.id);
        await dataBase.set({
          postContent: this.blogHTML,
          postTitle: this.blogTitle,
          imageLink: this.imageLink,
        });
        this.$router.push({ name: "Blogs" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields!";
      return;
    },*/
    uploadBlog() {
       if (this.blogTitle.length !== 0 && this.blogHTML.length !== 0)
        {
          if (this.file) {
            const storageRef = firebase.storage().ref();
            const docRef = storageRef.child(`documents/images/${this.$store.state.blogPhotoName}`);
            docRef.put(this.file).on("state_changed", (snapshot) => {
              console.log(snapshot);
            }, (err) => {
              console.log(err);
            }, async ()
            );
            return;
          }
          this.error = true;
          this.errorMsg = "Please ensure you uploaded a cover photo";
          setTimeout(() => {
          this.error = false;
        }, 5000)
          return;
        }
        this.error = true;
        this.errorMsg = "Please make sure the title and post is filled!";
        setTimeout(() => {
          this.error = false;
        }, 5000)
    },
  },
};
</script>

<style scoped>
</style>
