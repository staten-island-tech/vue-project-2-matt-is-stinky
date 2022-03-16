<template>
    <div class="addCard">
        <h2>Create a New Card</h2>
        <form>
            <label>Title:</label>
            <input type="text" v-model.lazy="card.title" required />
            <label>Content:</label> 
            <textarea v-model.lazy="card.content"></textarea>
            <button>submit</button>
        </form>
        <div class="cardPreview">
            <h3>Preview Card</h3>
            <p>Card Title: {{ card.title }}</p>
            <p>Card Content:</p>
            <p>{{ card.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddCard",
    data(){
        return{
            card:{
            title:"",
            content:"", 
            }
        }
    },
    methods:{
        
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
    margin-top: .625rem
}
</style>