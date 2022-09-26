<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
</script>

<script>
  export default {
    data() {
      return {
        
      }
    },
    created() {
      console.log(this.$store.state.count)
    }
  }
</script>

<template>
  <HelloWorld msg="Hello World!" />
</template>

<style scoped>

</style>
