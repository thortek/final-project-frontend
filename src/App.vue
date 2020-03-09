<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-content>
      <ApolloExample/>
    </v-content>
  </v-app>
</template>

<script>
import ApolloExample from './components/ApolloExample';

export default {
  name: 'App',

  components: {
    ApolloExample,
  },

  data: () => ({
    //
  }),
};
</script>
