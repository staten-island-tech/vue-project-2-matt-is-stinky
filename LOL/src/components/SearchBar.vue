<template>
    <input type="text" id="SearchBar" placeholder="SEARCH FOR CHAMPION">
</template>

<script>
export default {
    computed: {
        searchPosts: function() {
            return this.Posts.filter((Post) => {
                return Post.name.match(this.search);
            })
        }
    }
}
</script>

<style>
</style>