<template>
    <div class="addCard">
        <h2>Create a New Card</h2>
        <form>
            <div class="inputs">
                <div class="input">
                    <input class="title" type="text" v-model="blogTitle" placeholder="Title" />
                </div>
                <div class="input">
                    <textarea class="contentData" v-model="blogHTML"/>
                </div>
                <div class="input">
                   <input class="input-file" type="file" ref="blogPhoto" id="blog-photo" @change="fileChange" accept=".png, .jpg, .jpeg"> 
                </div>
            </div>
        </form>
        <!-- <div class="cardPreview">
            <h3>Preview Card</h3>
            <p>Card Title: {{ card.title }}</p>
            <p>Card Content:</p>
            <p>{{ card.content }}</p>
        </div> -->
        <button @click="uploadBlog">Publish</button>
    </div>
</template>

<script>
import "firebase/compat/firestore";
//import db from "..firebase/config";
import firebase from "firebase/app"

export default {
    name: "AddCard",
    data() {
        return{
            card:{
            title:"",
            content:"", 
            }
        }
    },
    methods:{
        fileChange() {
            this.file = this.$refs.blogPhoto.files[0];
            const fileName = this.file.name;
            this.$store.commit("fileNameChange", fileName)
            this.$store.commit("createFileURL", URL.createObjectURL(this.file));
        },
        uploadBlog() {
            if (this.blogTitle.length !== 0 && this.blogHTML.length !== 0) {
                if (this.file) {
                    const storageRef = firebase.storage().ref();
                    const docRef = storageRef.child(`Storage/Post-Images/${this.$store.state.blogPhotoName}`);
                    docRef.put(this.file)
                }
                return;
            }
            this.error = true;
            this.errorMsg = "enter values";
        },
    },
    computed:{
    blogTitle: {
        get() {
            return this.$store.state.blogTitle
        },
        set(payload) {
            this.$store.commit("newBlogTitle", payload)
        }
    },
    blogHTML: {
        get() {
            return this.$store.state.blogHTML
        },
        set(payload) {
            this.$store.commit("newBlogPost", payload)
        }
    }
    }
}
</script>

<style>
.add-card *{
    box-sizing: border-box;
}
.add-card{
    margin: 1.25rem auto;
    max-width: 31.25rem;
}

h3{
    margin-top: .625rem
}
form {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
}

h2 {
    text-align: center;
    font-size: 3.2rem;
    color: #000000;
    margin-bottom: 4rem;
}

.contentData {
    background-color: white;
    color: gray;
    padding: 1rem;
    border-radius: 2rem;
    border: 0.2rem solid transparent;
    outline: none;
    font-weight: 500;
    line-height: 1.4;
    width: 500rem;
    height: 20rem;
}
.input-file {
    color: black;
}
</style>