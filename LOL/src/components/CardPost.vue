<template>
<div class="card-wrapper">
        <div class="card-content">           
            <h2 >{{ post.title }}</h2>
            <p class="content-preview">{{ post.PostContent }}</p>
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
.card-wrapper {
    display: flex;
    flex-direction: column;
    box-shadow: 0 .25rem .3rem -.1rem rgba(0, 0, 0, 0.1), 0 .125rem .25rem -.1rem rgba(0, 0, 0, 0.06);
}
</style>