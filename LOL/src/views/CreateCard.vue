@ -1,74 +1,83 @@
<template>
  <div class="addCard">
    <LoadingPage v-if="loading" />
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
import LoadingPage from "../components/LoadingPage";

export default {
  name: "Create-Post",
  components: {
    LoadingPage,
  },
  data() {
    return {
      blogHTML: "",
      blogTitle: "",
      loading: null,
      file: null,
      error: null,
      errorMsg: "",
    };
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
          this.loading = true;
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
              this.loading = false;
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
              await this.$store.dispatch("getPost");
              this.loading = false;
            }
          );
        }
        this.error = false;
        this.errorMsg = "";
        this.$router.push({ name: "Home" });
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

<style scoped>
h2 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.addCard {
  display: grid;
  align-items: center;
  justify-content: center;
}
.contentData {
  background-color: white;
  color: gray;
  width: 50rem;
  height: 20rem;
  outline: none;
  border-radius: 1rem;
  padding: 0.3rem 0.3rem 0.3rem 1rem;
}

@media screen and (max-width: 50rem) {
  .contentData {
    width: 100%;
  }

  input {
    width: 100%;
  }
}
</style>
