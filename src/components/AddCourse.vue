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
      <button :disabled="loading" @click="mutate()">Click me</button>
      <p v-if="error">An error occurred: {{ error }}</p>
    </template>
  </ApolloMutation>
</template>

<script>
export default {
  data() {
    return {
      name: 'adfd',
      description: 'adfa',
      defaultCredits: 'adf',
      courseCode: 'DGM 9000',
      termsOffered: 'adf',
    }
  },
  methods: {
    onDone() {
      return console.log('Done')
    },
  },
}
</script>
