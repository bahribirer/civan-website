<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const services = computed(() => [
    {
        title: t('home_services.items.1.title'),
        description: t('home_services.items.1.desc'),
        icon: 'pi pi-building'
    },
    {
        title: t('home_services.items.2.title'),
        description: t('home_services.items.2.desc'),
        icon: 'pi pi-home'
    },
    {
        title: t('home_services.items.3.title'),
        description: t('home_services.items.3.desc'),
        icon: 'pi pi-box'
    },
    {
        title: t('home_services.items.4.title'),
        description: t('home_services.items.4.desc'),
        icon: 'pi pi-comments'
    }
]);
</script>

<template>
  <section class="services-section py-6 bg-light">
    <div class="container">
      <div class="section-header text-center mb-5">
        <h2 class="text-primary">{{ t('home_services.title') }}</h2>
        <p class="text-secondary text-lg">{{ t('home_services.subtitle') }}</p>
      </div>
      
      <div class="services-grid">
        <Card v-for="(service, index) in services" :key="index" class="service-card shadow-1">
            <template #header>
                <div class="icon-wrapper">
                    <i :class="service.icon"></i>
                </div>
            </template>
            <template #title>{{ service.title }}</template>
            <template #content>
                <p>
                    {{ service.description }}
                </p>
            </template>
            <template #footer>
                <Button :label="t('home_services.button')" class="p-button-text" />
            </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.py-6 { padding: 4rem 0; }
.bg-light { background-color: var(--c-bg-light); }
.text-center { text-align: center; }
.mb-5 { margin-bottom: 3rem; }
.text-primary { color: var(--c-primary); }
.text-secondary { color: var(--c-text-muted); }
.text-lg { font-size: 1.1rem; }

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.service-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
    background-color: var(--c-bg-white) !important;
    color: var(--c-text-main) !important;
    border: 1px solid var(--c-border);
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.icon-wrapper {
    padding: 2rem 0 1rem;
    font-size: 3rem;
    color: var(--c-secondary);
}

.p-card :deep(.p-card-content) {
    padding-top: 0;
}
</style>
