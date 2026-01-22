<script setup>
import { RouterView } from 'vue-router';
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
</script>

<template>
    <div class="layout-wrapper">
        <header class="layout-header">
            <AppNavbar />
        </header>

        <main class="layout-main">
            <RouterView />
        </main>

        <AppFooter />
    </div>
</template>

<style scoped>
.layout-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.layout-main {
    flex: 1;
}

/* Header style override if needed, otherwise handled by AppNavbar container */
.layout-header {
    padding: 0;
    position: sticky;
    top: 0;
    z-index: 1000;
}
</style>
