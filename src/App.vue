<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
    <v-spacer></v-spacer>
    <div>
        <router-link class="routerLink" to="/">Home</router-link><span class="routerLink"> | </span>
        <router-link class="routerLink" to="/admin">Admin</router-link>
      </div>
    <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      
      <!-- <CourseCard/> -->
      <!-- <Admin/> -->
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
//import ApolloExample from './components/ApolloExample';
//import CourseCard from './components/CourseCard'
//import Admin from './components/Admin'

export default {
  name: 'App',

  components: {
    //ApolloExample,
    //CourseCard,
    //Admin
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.routerLink {
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
}
</style>
