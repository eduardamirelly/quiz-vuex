<script setup>
defineProps({
  textAlternative: String
})
</script>

<template>
  <q-btn outline color="green-4" :label="textAlternative" id="alternative" />
</template>

<style scoped>
#alternative {
  margin-block: .5rem;
}
</style>