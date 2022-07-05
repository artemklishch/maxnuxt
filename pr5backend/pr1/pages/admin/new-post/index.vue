<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @savepost="onSavePost" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "@/static/constants";
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  layout: "admin",
  components: {
    AdminPostForm,
  },
  methods: {
    onSavePost(postData) {
      axios
        .post(BASE_URL + "/posts.json", postData)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>

