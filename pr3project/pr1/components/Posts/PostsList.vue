<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://www.acquisition-international.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/01/tech-cruve.jpg.webp"
      title="Hi"
      previewText="Hello there!"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://www.acquisition-international.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/01/tech-cruve.jpg.webp"
      title="Hi one more"
      previewText="Hello there one more!"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://www.acquisition-international.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/01/tech-cruve.jpg.webp"
      title="Hi, hi"
      previewText="Hello, hello there!"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue";

export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>


<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>