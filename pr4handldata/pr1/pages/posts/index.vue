<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList,
  },
  asyncData(context, callback) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: "1",
              thumbnail:
                "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
              title: "Hello there!",
              previewText: "This my first post!",
            },
            {
              id: "2",
              thumbnail:
                "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
              title: "Hello more there!",
              previewText: "This my first post in my life!",
            },
            {
              id: "3",
              thumbnail:
                "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
              title: "Hi there!",
              previewText: "Very well!",
            },
          ],
        });
      }, 1000);
    })
      .then((data) => data)
      .catch((e) => {
        context.error(e);
      });
  },
};
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
