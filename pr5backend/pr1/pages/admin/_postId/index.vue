<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @savepost="onSavePost" />
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
  data() {
    return {
      loadedPost: {
        author: "Maximilian",
        title: "My awesome Post",
        content: "Super amazing, thanks for that!",
        thumbnailLink:
          "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
      },
    };
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
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
