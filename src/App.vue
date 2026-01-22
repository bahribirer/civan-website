<script setup>
import WhatsAppFab from './components/WhatsAppFab.vue';
</script>

<template>
  <div class="app-layout">
    <RouterView />
    <WhatsAppFab />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
