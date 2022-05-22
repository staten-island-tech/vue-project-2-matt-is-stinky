@ -1,74 +1,83 @@
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
export default {
  name: "Create-Post",
  components: {},
  data() {
    return {
      blogHTML: "",
      blogTitle: "",
      file: null,
      error: null,
      errorMsg: "",
      currentPost: null,
      routeID: null,
    };
  },
  async mounted() {
    this.routeID = this.$route.params.postid;
    this.currentPost = await this.$store.state.blogPosts.filter((post) => {
      return post.postID === this.routeID;
    });
    this.$store.commit("setPostState", this.currentPost[0]);
  },
  methods: {
    fileChange() {
      this.file = this.$refs.blogPhoto.files[0];
      const fileName = this.file.name;
      this.$store.commit("fileNameChange", fileName);
      this.$store.commit("createFileURL", URL.createObjectURL(this.file));
    },
    uploadBlog() {
      if (this.blogHTML !== "" && this.blogTitle !== "") {
        if (this.file) {
          const storageRef = firebase.storage().ref();
          const docRef = storageRef.child(
            `documents/BlogCoverPhotos/${this.$store.state.blogPhotoName}`
          );
          docRef.put(this.file).on(
            "state_changed",
            (snapshot) => {
              console.log(snapshot);
            },
            (err) => {
              console.log(err);
            },
            async () => {
              const downloadURL = await docRef.getDownloadURL();
              const dataBase = await db.collection("posts").doc();

              await dataBase.set({
                postID: dataBase.id,
                postPhoto: downloadURL,
                postContent: this.blogHTML,
                postTitle: this.blogTitle,
              });
            }
          );
        }
        this.error = false;
        this.errorMsg = "";
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields!";
      return;
    },
    computed: {
      postTitle: {
        get() {
          return this.$store.state.postTitle;
        },
        set(payload) {
          this.$store.commit("updateBlogTitle", payload);
        },
      },
    },
  },
};
</script>

<style scoped></style>
