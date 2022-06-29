<template>
  <h1>Single user with the ID: {{ $route.params.id }}</h1>
</template>

<script>
export default {
  validate(data) {
    // return data.params.id == 1
    return /^\d+$/.test(data.params.id);
  },
};
</script>