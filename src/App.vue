<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-content>
      <!-- <CourseCard/> -->
      <AddCourse/>
    </v-content>
  </v-app>
</template>

<script>
//import ApolloExample from './components/ApolloExample';
//import CourseCard from './components/CourseCard'
import AddCourse from './components/AddCourse'

export default {
  name: 'App',

  components: {
    //ApolloExample,
    //CourseCard,
    AddCourse
  },

  data: () => ({
    //
  }),
};
</script>
