<template>
  <div class="card-post">

      <div class="card-wrapper">
      <h2> {{post.name}} </h2>
      <h3> {{post.PostDate}} </h3>
      <img class="image" src="">
      </div>
      </div>
</template>

<script>
export default {
name: "PostCard",
props: ["post"]
}
</script>

<style>
h2{
    font-size: 2.5rem;
}
h3{
    font-size: 1.5rem;
}
p{
    font-size: 1.23rem;
}
.card-post{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 30%;
    margin: 2rem auto;
}
.card-wrapper{
     width: 30%;
     height: 20rem;
     display: flex;
     flex-direction: column;
     justify-content: center;
     margin: .5rem .5rem;
}
</style>