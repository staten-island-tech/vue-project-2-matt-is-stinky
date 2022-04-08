<template>
    <div class="addCard">
        <h2 class="header-text">Create a New Card</h2>
        <form>
            <label>Title:</label>
            <input type="text" placeholder="Enter Blog Title" v-model="blogTitle"/>
            <label>Content:</label> 
            <textarea placeholder="Enter Blog Content" v-model="blogHTMl"></textarea>
            <button @click = "uploadBlog">submit</button>
        </form>
        <!-- <div class="cardPreview">
            <h3>Preview Card</h3>
            <p>Card Title: {{ card.title }}</p>
            <p>Card Content:</p>
            <p>{{ card.content }}</p>
        </div> -->
    </div>
</template>

<script>
// import firebase from "firebase/compat/app"
import "firebase/compat/storage"
// import db from "../firebase/config"

export default {
    name: "AddCard",
    data(){
        return{
            card:{
            title:"",
            content:"", 
            error: null,
            errorMsg: null,

            }
        }
    },
    methods:{
        
    },
    computed:{
    blogTitle: {
        get() {
            return this.$store.state.blogTitle
        },
        set(payload) {
            this.$store.commit("updateBlogTitle", payload)
        }
    },
    blogHTML: {
        get() {
            return this.$store.state.blogHTML
        },
        set(payload) {
            this.$store.commit("updateBlogHTML", payload)
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
label{
    display: block;
    margin: 1.25rem 0 .625rem
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: .5rem;
}
.preview{
    padding: .625rem 1.25rem;
    border: .1rem dotted #ccc;
    margin: 2rem 0
}
h3{
    margin-top: .625rem;
    color: black
}
.header-text{
    color: white
}
</style>