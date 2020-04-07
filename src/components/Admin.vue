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
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                v-model="name"
                label="Course name"
                required
                filled
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12">
              <v-textarea
                filled
                clearable
                rows="4"
                v-model="description"
                label="Course description"
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="5">
              <v-select
                :items="creditItems"
                filled
                label="Default credits"
              ></v-select>
            </v-col>
            <v-col cols="12" md="2">
              <v-text-field
                v-model="courseCode"
                filled
                label="Couse code"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="5">
              <v-select :items="terms" filled label="Terms offered"></v-select>
            </v-col>
          </v-row>
          <v-btn large color="primary" :disabled="loading" @click="mutate()"
            >Save</v-btn
          >
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
      name: this.editableCourse.name,
      description: '',
      defaultCredits: '',
      courseCode: 'DGM 9000',
      termsOffered: '',
      creditItems: ['1', '2', '3', '4'],
      terms: [
        'Fall',
        'Spring',
        'Summer',
        'Fall/Spring',
        'Spring/Summer',
        'Fall/Spring/Summer',
      ],
    }
  },
  methods: {
    onDone() {
      return console.log('Done')
    },
  },
    computed: {
      editableCourse() {
        return this.$store.getters.editableCourse
      },
    },
}
</script>
