  
<template>
  <div>
      <h1>Admin Page</h1>
    <Admin/>
  </div>
</template>

<script>
// @ is an alias to /src
import Admin from "@/components/Admin.vue"

export default {
  name: "admin",
  components: {
    Admin
  }
}
</script>