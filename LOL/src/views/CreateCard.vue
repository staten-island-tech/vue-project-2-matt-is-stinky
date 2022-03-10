<template>
    <div class="createCard">
        {{ name }}
    <div class="everything">
     <div class="CardBG">
        <form class="form">
         <div class="form-inputs">
         <input type="text" name="title" v-model="title" required>
        </div>
        <div class="form-inputs">
         <input input type="file" @change="onFileSelected" refname="image">
        </div>
        <div class="form-inputs">
         <input type="text" name="blurb" v-model="blurb" required>
        </div>
        <div class="submit">
         <button @click="onUpload">Submit</button>
         </div>
         </form>
     </div>
    </div>
    </div>
</template>
<script>
export default {
    
    data(){
        return{
        selectedFile: null
        }
    },
    methods:{
        onFileSelected(event){
          this.selectedFile = event.target.files[0]
        },
        onUpload(){
            
        }
    }
}
</script>
<style>
.everything{
    width: 100%; 
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem;
}
.CardBG{
    background-color: black;
    height: 40rem;
    width: 28rem;
    border-radius: 6rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.CreateBG{
    background-color: grey;
    height: 7rem;
    width: 16rem;
    border-radius: 6rem;
    margin: .6rem;
    display: flex;
    align-items: center;
    justify-content: center
}
.Publish{
    background-color: red;
    height: 7rem;
    width: 16rem;
    border-radius: 6rem;
    margin: .6rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.form-inputs{
    background-color: grey;
    margin: 1rem;
    padding: 2.6rem;
    border-radius: 6rem;
}
.submit{
    background-color: red;
    margin: 1rem;
    padding: 2rem;
    border-radius: 6rem;
}
.form{
    display: flex;
    flex-direction: column;
}
</style>
