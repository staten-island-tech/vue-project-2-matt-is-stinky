<template>
    <div class="createCard">
        {{ name }}
    <div class="everything">
        <div class="CardBG">
           <h3>Create a Card</h3>
           <div class="CreateBG enterName">
              <h3>Name</h3>
          </div>
           <div class="CreateBG enterImage">
               <h3>File Image</h3>
          </div>
          <div class="CreateBG enterBlurb">
                <h3>Short Blurb</h3>
            </div>
            <div class="Publish">
                <h3>Publish</h3>
            </div>
        </div>
    </div>
</template>
<script>
/*     export default {
        props: {
            name: ,
            fileImage: ,
            description: ,

        }
    } */
</script>
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
