<template>
    <div class="addCard">
        <h2 class="header-text">Create a New Card</h2>
        <form>
            <label>Title:</label>
            <input type="text" placeholder="Enter Blog Title" v-model="blogTitle"/>
            <label>Content:</label>          
            <textarea v-model="blogHTML"></textarea>
            <input type="file" placeholder="Choose Image">  
            <button @click = "uploadBlog">submit</button>
        </form>
         <!-- <div class="cardPreview">
            <h3>Preview Card</h3>
            <p>Card Title: {{ card.title }}</p>
            <p>Card Content:</p>
            <p>{{ card.content }}</p>
        </div>  -->
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
.add-card *{
    box-sizing: border-box;
}
.add-card{
    margin: 1.25rem auto;
    max-width: 31.25rem;
}

</style>