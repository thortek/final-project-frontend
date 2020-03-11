<template>
  <ApolloMutation
    :mutation="gql => gql`
      mutation ($input: SendMessageToThreadInput!) {
        sendMessageToThread (input: $input) {
          message {
            ...message
          }
        }
      }
      ${$options.fragments.message}
    `"
    :variables="{
      threadId,
      text
    }"
    :update="updateCache"
  >
    <!-- Form here -->
  </ApolloMutation>
</template>

<script>
import gql from 'gql-tag'

const fragments = {
  message: gql`
    fragment message on Message {
      id
      text
      user {
        id
        name
      }
    }
  `
}

export default {
  fragments,

  props: {
    threadId: {
      type: String,
      required: true
    }
  },

  methods: {
    updateCache (store, { data: { sendMessageToThread } }) {
      const query = {
        query: gql`
        query ($threadId: ID!) {
          thread (id: $threadId) {
            id
            messages {
              ...message
            }
          }
        }
        ${fragments.message}
        `,
        variables: {
          threadId: this.threadId,
        },
      }
      // Read the query from cache
      const data = store.readQuery(query)
      // Mutate cache result
      data.thread.messages.push(sendMessageToThread.message)
      // Write back to the cache
      store.writeQuery({
        ...query,
        data,
      })
    },
  }
}
</script>