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
import db from "../firebase/config";
/* import storage from "../firebase/config" */
export default {
  name: "Create-Post",
  data() {
    return {
      blogHTML: "",
      blogTitle: "",
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
    async uploadBlog() {
      if (this.blogHTML !== "" && this.blogTitle !== "") {
        this.error = false;
        this.errorMsg = "";
        const dataBase = db.collection("posts").doc(this.id);
        await dataBase.set({
          postContent: this.blogHTML,
          postTitle: this.blogTitle,
        });
        this.$router.push({ name: "Blogs" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields!";
      return;
    },
  },
};
</script>

<style></style>
