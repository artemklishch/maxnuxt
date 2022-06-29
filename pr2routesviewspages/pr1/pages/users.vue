<template>
  <div>
    <h1>Users Vue</h1>
    <input type="text" v-model="userId" />
    <button @click="goToUser">Load USER</button>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    goToUser() {
      this.$router.push(`/users/${this.userId}`);
    },
  },
  layout: "users"
};
</script>