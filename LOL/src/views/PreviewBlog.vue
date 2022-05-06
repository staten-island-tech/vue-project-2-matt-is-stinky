<template>
    <div class="post-view">
        <h2> {{ this.blogTitle }}</h2>
        <img :src="blogCoverPhoto" alt="" />           
        <div class="post-content" v-html="blogHTML"></div>
    </div>
</template>

<script>
export default {
    name: "PreviewPost",
    computed: {
        blogTitle() {
            return this.$store.state.blogTitle;
        },
        blogHTML() {
            return this.$store.state.blogHTML;
        },
        blogCoverPhoto() {
            return this.$store.state.blogPhotoFileURL;
        }
    },
};
</script>

<style>
.post-view {
    min-height: 100%;
}

img {
    width: 100%;
}
</style>