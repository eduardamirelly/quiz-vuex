<script setup>
import Alternative from './Alternative.vue';
</script>

<template>
  <div id="panel">
    <div class="header">
      <h4 class="text-h4 text-green">
        Lorem Ipsum
      </h4>
    </div>

    <div class="alternatives">
      <Alternative textAlternative="1" />
      <Alternative textAlternative="2" />
      <Alternative textAlternative="3" />
      <Alternative textAlternative="4" />
    </div>

    <div class="bottomBtns">
      <q-btn push color="green-7" label="Prev" disable />
      <q-btn push color="green-7" label="Next" />
    </div>
  </div>
</template>

<style scoped>
#panel {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#panel .header {
  padding: 3rem 0rem;
  margin-top: 2rem;
}

#panel .alternatives {
  width: 100%;
  max-width: 600px;

  display: flex;
  justify-content: center;
  flex-direction: column;
}

#panel .bottomBtns {
  width: 100%;
  max-width: 600px;

  display: flex;
  justify-content: space-between;

  margin-top: 2rem;
}
</style>