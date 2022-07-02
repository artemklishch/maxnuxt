<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>


<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  layouts: "admin",
  components: {
    AdminPostForm,
  },
  data() {
    return {
      loadedPost: {
        author: "Bob",
        title: "The awesome post!",
        content: "Super amazing",
        thumbnailLink:
          "https://www.acquisition-international.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/01/tech-cruve.jpg.webp",
      },
    };
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