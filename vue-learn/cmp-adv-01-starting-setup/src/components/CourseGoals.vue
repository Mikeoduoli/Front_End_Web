<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <!-- {{goal}} -->
       <!-- using scoped slots -->
        <slot :item="goal" another-prop="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ['Finish the course', 'Learn Vue']
    }
  },
}
</script>