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
