<template>
 <div class="create-card-warp">
     <div class="create-card-container">
         <h2>Create Post</h2>
         <div class="inputs">
             <div class="input">
                <input type="text" placeholder="Enter Post Title" v-model="postTitle">
             </div>
             <div class="input">
                <textarea placeholder="Enter Post Content" v-model="postContent"></textarea>
             </div>
             <div class="input">
                <input type="file" accept="jpeg,jpg,png"/>
             </div>
         </div>
         <button>Create Post</button>
     </div>
 </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>