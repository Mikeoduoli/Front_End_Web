<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experience submitted</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  mounted() {
    this.loadExperiences();
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      // Fetch submitted experiences from the API and update the results array
      fetch(
        'https://vue-http-demo-95ca4-default-rtdb.firebaseio.com/surveys',
      )
        .then((response)=>{
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
           this.isLoading = false;
          console.log(data);
          const results = [];
          for (const key in data) {
            results.push({
              key: key,
              name: data[key].name,
              rating: data[key].rating,
            });
          }
          this.results = results;
        })
        .catch((error) => {
           this.isLoading = false;
           this.error = "Failed to get data at this time. Try again later."
           console.error('Error:', error);
         });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
