<template>
  <div>
    <base-card>
      <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
      <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resources</base-button>
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue guide docs',
          link: 'https://vuejs.org/',
        },
        {
          id: 'official-guide',
          title: 'Google',
          description: 'Learn to Google - It is a great skill to have',
          link: 'https://google.com/',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab ='stored-resources';
    },
    removeResource(resId) {
      // This approach of using filtering wont work because of the original resource returned by the array of resources.
      // this.storedResources = this.storedResources.filter(res => res.id!== resId);
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
      console.log(this.storedResources.length)
    },
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab ==='stored-resources'? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resources'? null : 'flat';
    }
  },
}
</script>

<style scoped>

</style>