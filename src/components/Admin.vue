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
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field v-model="name" label="Course name" required filled></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-textarea v-model="description" label="Course description" rows="4" filled clearable></v-textarea>
          </v-col>
        </v-row>
        <v-row >
          <v-col cols="12" md="5">
          <v-select :items="creditItems" v-model="defaultCredits" filled label="Default credits"></v-select>
          </v-col>
          <v-col cols="12" md="2">
          <v-text-field v-model="courseCode" filled label="Course code"></v-text-field>
          </v-col>
          <v-col cols="12" md="5">
          <v-select :items="termsList" v-model="termsOffered" filled label="Terms offered"></v-select>
          </v-col>
        </v-row>
        <v-btn large color="primary" :disabled="loading" @click="mutate()">Add Course</v-btn>
        <p v-if="error">An error occurred: {{ error }}</p>
      </v-container>
    </v-form>
  </template>
  </ApolloMutation>
</template>

<script>
export default {
  data: function() {
    return {
      name: '',
      description: '',
      defaultCredits: '',
      courseCode: '',
      termsOffered: '',
      creditItems: ['1', '2', '3'],
      termsList: ['Fall', 'Spring', 'Fall/Spring', 'Summer', 'Fall/Spring/Summer']
    }
  },
  methods: {
    onDone() {
      return console.log('Done')
    }
  }
}
</script>