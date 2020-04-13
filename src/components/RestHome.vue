<template>
<v-container>
<h1>Welcome to the REST home!</h1>
<v-btn @click="getAllProducts">Get Data</v-btn>
</v-container>
</template>

<script>

export default {
  name: 'RestHome',

  data: () => ({
    searchString: "DGM"
  }),
  methods: {
    getAllProducts() {
      fetch('http://localhost:5000/admin/getAllProducts',
      {
          method: 'GET',
      })
      .then(response => {
         response.json().then(data => {
                return console.log(data)
          })
      })
      .catch(error => {
          return console.error(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
