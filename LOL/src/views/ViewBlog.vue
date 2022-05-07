<template>
    <div class="post-view" v-if="currentBlog">
        <div>
            <h2>{{ this.currentBlog[0].blogTitle }}</h2>
           <img :src="this.currentBlog[0].blogCoverPhoto" alt="" />
           <div class="post-content" v-html="this.currentBlog[0].blogHTML"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:"ViewBlog",
    data() {
        return {
            currentBlog: null,
        };
    },
}
</script>