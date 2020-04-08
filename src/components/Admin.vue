<template>
  <ApolloMutation
    :mutation="require('../graphql/UpdateCourse.gql')"
    :variables="{
      id,
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
          <v-text-field v-model="defaultCredits" filled label="Default credits"></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
          <v-text-field v-model="courseCode" filled label="Course code"></v-text-field>
          </v-col>
          <v-col cols="12" md="5">
          <v-select :items="termsList" v-model="termsOffered" filled multiple label="Terms offered"></v-select>
          </v-col>
        </v-row>
        <v-btn large color="secondary" :disabled="loading" @click="returnHome">Cancel</v-btn>
        <v-btn large color="primary" :disabled="loading" @click="mutate()">Save</v-btn>
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
      id: this.$store.getters.currentEditableCourse.id,
      name: this.$store.getters.currentEditableCourse.name,
      description: this.$store.getters.currentEditableCourse.description,
      defaultCredits: this.$store.getters.currentEditableCourse.defaultCredits,
      courseCode: this.$store.getters.currentEditableCourse.courseCode,
      termsOffered: this.$store.getters.currentEditableCourse.termsOffered,
      termsList: ['Fall', 'Spring', 'Summer']
    }
  },
  methods: {
    onDone() {
      return console.log('Done')
    },
    returnHome() {
      console.log('Going home')
      this.$router.push('/')
    }
  }
}
</script>