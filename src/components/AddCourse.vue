<template>
  <ApolloMutation
    :mutation="require('../graphql/AddCourse.gql')"
    :variables="{
      name,
      description,
      defaultCredits,
      courseCode,
      termsOffered,
      }"
      @done="onDone"
  >
  <template v-slot="{ mutate, loading, error }">
    <!-- Form here -->
    <v-form>
      <v-container>
        <v-btn large primary :disabled="loading" @click="mutate()">Add Course</v-btn>
        <p v-if="error">An error occured: {{ error }}</p>
      </v-container>
    </v-form>
  </template>
  </ApolloMutation>
</template>

<script>
export default {
  data: function() {
    return {
      name: 'Awesome course',
      description: 'The most awesome course ever',
      defaultCredits: '3',
      courseCode: 'DGM 9000',
      termsOffered: 'Fall, Spring',
    }
  },
  methods: {
    onDone() {
      return console.log('Done')
    }
  }
}
</script>