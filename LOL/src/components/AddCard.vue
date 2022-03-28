<template>
    <div class="addCard">
        <h2>Create a New Card</h2>
        <form>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="Title" v-model.lazy="card.title" required />
                </div>
                <div class="input">
                    <input type="content" placeholder="Content" v-model.lazy="card.title" required />
                </div>
            </div>
        </form>
        <div class="cardPreview">
            <h3>Preview Card</h3>
            <p>Card Title: {{ card.title }}</p>
            <p>Card Content:</p>
            <p>{{ card.content }}</p>
        </div>
        <button>Publish</button>
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
.form-wrap {
    overflow: hidden;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-self: center;
    margin: 0 auto;
    width: 100%;
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
.inputs {
    width: 100%;
    max-width: 35rem;
}

.input {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.8rem;
}
input {
    width: 100%;
    border: none;
    background-color: #FFFFFF;
    padding: 0.4rem 0.4rem 0.4rem 3rem;
    height: 5rem;
}

body {
    background-size:cover;
    background-image: url("../assets/notstolenbtw.jpg");
}

</style>