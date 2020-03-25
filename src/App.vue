<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-content>
     <!--  <HelloWorld/> -->
     <AddCourse/>
    </v-content>
  </v-app>
</template>

<script>
//import ApolloExample from './components/ApolloExample';
//import HelloWorld from './components/HelloWorld'
import AddCourse from './components/AddCourse'

export default {
  name: 'App',

  components: {
    //ApolloExample,
    //HelloWorld
    AddCourse
  },

  data: () => ({
    //
  }),
};
</script>
