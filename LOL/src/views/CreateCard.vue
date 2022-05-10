<template>
    <div class="addCard">
        <h2>Create a New Card</h2>
        <form>
            <div class="inputs">
                <div class="input">
                    <input class="title" type="text" v-model="blogTitle" placeholder="Title" />
                </div>
                <div class="input">
                    <textarea class="contentData" v-model="blogHTML" placeholder="Content"/>
                </div>
                <div class="input">
                   <input class="input-file" type="file" ref="blogPhoto" id="blog-photo" accept=".png, .jpg, .jpeg" > 
                </div>
            </div>
        </form>
        <button @click="uploadBlog">Publish</button>
    </div>
</template>

<script>
import "firebase/compat/firestore";
/* import db from "../firebase/config";  
import storage from "../firebase/config";  */

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
        async upload() {

        }
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