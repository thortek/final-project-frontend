<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-content>
      <div>
     <router-link to="/">Home</router-link> |
      <router-link to="/admin">Admin</router-link>
      </div>
       <router-view/>
    </v-content>
  </v-app>
</template>

<script>
//import ApolloExample from './components/ApolloExample';
//import HelloWorld from './components/HelloWorld'
//import AddCourse from './components/AddCourse'

export default {
  name: 'App',

  components: {
    //ApolloExample,
    //HelloWorld
    //AddCourse
  },

  data: () => ({
    //
  }),
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>