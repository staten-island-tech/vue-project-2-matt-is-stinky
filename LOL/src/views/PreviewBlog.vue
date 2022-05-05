<template>
    <div class="post-view">
        <h2> {{ post.name }}</h2>
        <img :src="require(`../assets/images/${post.PostImage}.jpg`)" alt="">           
        <h2> {{ post.date }} </h2> "
    </div>
</template>

<script>
export default {
    name: "PreviewPost",
    computed: {
        
    },
};
</script>

<style>
</style>