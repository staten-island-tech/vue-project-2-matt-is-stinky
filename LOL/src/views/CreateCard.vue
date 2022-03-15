<template>
  <form>
  <div>
  <label for="name">Name: </label>
  <input required type="text" id="name" v-model="name" />
  </div>
  <!--- <div>
    <input type="file" @change="onFileSelected" refname="image">
  </div> --->
  <div>
  <label for="description">Description: </label>
  <input required type="text" id="description" v-model="description" />
  </div>
  <button @click="addNewCard" class="button">
    Create Card!
  </button>
  </form>
</template>

<script>
export default {
  name: "createCard",
  data() {
    return {
      name: null,
      /*selectedFile: null,*/
      description: null,
    }
  },
  methods: {
    /*onFileSelected(event) {
      this.selectedFile - event.target.files[0]
    },
    onUpload() {

    }*/
    addNewCard() {
    },
    async uploadCard() {
      
    }
  }
}
</script>