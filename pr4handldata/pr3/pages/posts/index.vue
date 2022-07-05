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
  fetch(context) {
    // this if condtion not ideal and we replace it with nuxtServerInit action in the 
    // Vuex actions 
    // if (context.store.state.loadedPosts.length > 0) {
    //   return null;
    // }
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
      .then((data) => context.store.commit("setPosts", data))
      .catch((e) => {
        context.error(e);
      });
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
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
