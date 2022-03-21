<template>
<div class="card-wrapper">
        <div class="card-content">
            <h2>{{ post.title }}</h2>
            <p>{{ post.PostContent }}</p>
            
        </div>
    </div>
</template>
<script>
export default{
    name: "BlogPost",
    props: ["post"],
}
</script>
<style>
</style>