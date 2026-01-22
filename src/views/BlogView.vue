<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="blog-view main-content-pad">
    <div class="container">
       <div class="text-center mb-6">
        <h1 class="page-title">{{ t('nav.blog') }}</h1>
        <p class="page-subtitle">Latest news, tips, and updates.</p>
      </div>

      <div class="grid">
        <div class="col-12 md:col-6 lg:col-4 mb-4" v-for="i in 3" :key="i">
            <Card class="h-full hover-effect surface-card">
                 <template #header>
                    <div class="blog-image-placeholder h-15rem bg-gray-200 flex align-items-center justify-content-center border-round-top-xl">
                        <i class="pi pi-image text-5xl text-gray-500"></i>
                    </div>
                </template>
                <template #title>
                    <span class="text-primary font-bold">Blog Post Title {{ i }}</span>
                </template>
                <template #subtitle>
                    <span class="text-secondary">Jan {{ 20 + i }}, 2024</span>
                </template>
                <template #content>
                    <p class="m-0 text-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae...
                    </p>
                </template>
                <template #footer>
                     <Button label="Read More" icon="pi pi-arrow-right" class="p-button-text" />
                </template>
            </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-content-pad {
    padding: 5rem 0;
    min-height: 80vh;
}

.page-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--c-primary);
    margin-bottom: 0.5rem;
}
:global(.my-app-dark) .page-title { color: var(--p-surface-0); }

.page-subtitle {
     font-size: 1.25rem;
    color: var(--c-text-muted);
}
:global(.my-app-dark) .page-subtitle { color: var(--p-surface-400); }

.surface-card {
    background-color: var(--p-surface-0);
    border: 1px solid var(--p-surface-200);
}
:global(.my-app-dark) .surface-card {
    background-color: var(--p-surface-800);
    border-color: var(--p-surface-700);
}

.text-primary { color: var(--c-primary); }
:global(.my-app-dark) .text-primary { color: var(--c-primary-light); }

.text-700 { color: var(--p-text-color); }
:global(.my-app-dark) .text-700 { color: var(--p-surface-200); }

.bg-gray-200 { background-color: #e5e7eb; }
:global(.my-app-dark) .bg-gray-200 { background-color: var(--p-surface-700); }

.hover-effect {
    transition: transform 0.3s;
}
.hover-effect:hover {
    transform: translateY(-5px);
     box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Utilities */
.grid { display: flex; flex-wrap: wrap; margin-right: -0.5rem; margin-left: -0.5rem; }
.col-12 { width: 100%; padding: 0.5rem; }
@media (min-width: 768px) { .md\:col-6 { width: 50%; } }
@media (min-width: 992px) { .lg\:col-4 { width: 33.3333%; } }
.mb-6 { margin-bottom: 3rem !important; }
.mb-4 { margin-bottom: 1.5rem !important; }
.h-full { height: 100% !important; }
.h-15rem { height: 15rem !important; }
.flex { display: flex !important; }
.align-items-center { align-items: center !important; }
.justify-content-center { justify-content: center !important; }
.text-center { text-align: center !important; }
.border-round-top-xl { border-top-left-radius: 12px; border-top-right-radius: 12px; }
.text-5xl { font-size: 3rem; }
.text-gray-500 { color: #6b7280; }
.font-bold { font-weight: 700; }
.m-0 { margin: 0; }
</style>
