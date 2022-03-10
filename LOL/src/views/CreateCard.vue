<template>
    <div class="createCard">
        {{ name }}
    <div class="everything">
     <div class="CardBG">
        <form>
         <h3> Create A Card</h3>
         <label for="Card">Title</label>
         <input type="text" name="title" v-model="title" required>

         <label for="Card">Image</label>
         <input style="display: none" input type="file" @change="onFileSelected" refname="image">
         <button></button>

         <label for="Card">Blurb</label>
         <input type="text" name="blurb" v-model="blurb" required>

         <button @click="onUpload">Submit</button>
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
</style>
