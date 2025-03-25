<template>
  <div>
  <!-- <ul>
    <learning-resource
      v-for="res in storedResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul> -->
  <the-header title="Remember Me"></the-header>
  <!-- <stored-resources :resources="storedResources" /> -->
    <the-resources></the-resources>
  </div>
</template>

<script>
// import LearningResource from './components/learning-resources/LearningResource.vue';

// We won't use the component here
// import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layout/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';
export default {
  components: {
    // LearningResource,
    // StoredResources,
    TheHeader,
    TheResources,
  },
  data() {
    return {
      // storedResources: [
      //   {
      //     id: 'official-guide',
      //     title: 'Official Guide',
      //     description: 'The official Vue guide docs',
      //     link: 'https://vuejs.org/',
      //   },
      //   {
      //     id: 'official-guide',
      //     title: 'Google',
      //     description: 'Learn to Google - It is a great skill to have',
      //     link: 'https://google.com/',
      //   },
      // ],
    };
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
