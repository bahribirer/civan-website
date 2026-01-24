<script setup>
import { computed } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t } = useI18n();
const router = useRouter();

const categories = [
    { key: 'paints_interior', icon: 'pi pi-palette' },
    { key: 'paints_exterior', icon: 'pi pi-sun' },
    { key: 'ceramics', icon: 'pi pi-th-large' },
    { key: 'bathroom_products', icon: 'pi pi-box' },
    { key: 'kitchen', icon: 'pi pi-home' },
    { key: 'chemicals', icon: 'pi pi-filter' },
    { key: 'flooring', icon: 'pi pi-align-justify' },
    { key: 'plumbing', icon: 'pi pi-bolt' },
    { key: 'hardware', icon: 'pi pi-wrench' },
    { key: 'accessories', icon: 'pi pi-star' },
    { key: 'garden', icon: 'pi pi-globe' },
    { key: 'doors', icon: 'pi pi-lock' },
    { key: 'car_care', icon: 'pi pi-car' },
    { key: 'tools', icon: 'pi pi-cog' },
];
</script>

<template>
  <div class="products-view main-content-pad">
    <div class="container">
       <div class="text-center mb-6">
        <h1 class="page-title">{{ t('products_page.title') }}</h1>
        <p class="page-subtitle">{{ t('products_page.subtitle') }}</p>
      </div>

      <div class="grid">
        <div class="col-12 md:col-6 lg:col-3 mb-4" v-for="(cat, index) in categories" :key="index">
            <Card class="h-full hover-effect surface-card">
                <template #header>
                    <div class="product-image-placeholder h-10rem bg-gray-100 flex align-items-center justify-content-center border-round-top-xl">
                        <i :class="cat.icon" class="text-5xl text-gray-400"></i>
                    </div>
                </template>
                <template #title>
                    <span class="text-primary font-bold text-lg">{{ t(`products_page.categories.${cat.key}`) }}</span>
                </template>
                <template #footer>
                    <div class="flex gap-2 mt-auto">
                        <Button :label="t('nav.getQuote')" class="w-full p-button-sm p-button-outlined" icon="pi pi-arrow-right" @click="router.push('/contact')" />
                    </div>
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
:global(.my-app-dark) .page-title { color: #3b82f6 !important; }

.page-subtitle {
     font-size: 1.25rem;
    color: var(--c-text-muted);
}
:global(.my-app-dark) .page-subtitle { color: #94a3b8 !important; }

.surface-card {
    background-color: var(--c-bg-white);
    border: 1px solid var(--c-border);
}
:global(.my-app-dark) .surface-card {
    background-color: var(--c-bg-white) !important;
    border-color: var(--c-border) !important;
}

.text-primary { color: var(--c-primary); }
:global(.my-app-dark) .text-primary { color: var(--c-primary); }

.bg-gray-100 { background-color: rgba(255,255,255,0.05); }
:global(.my-app-dark) .bg-gray-100 { background-color: rgba(255,255,255,0.05) !important; }

.hover-effect {
    transition: transform 0.3s;
}
.hover-effect:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
}

/* Utilities */
.grid { display: flex; flex-wrap: wrap; margin: -0.5rem; }
.col-12 { width: 100%; padding: 0.5rem; }
@media (min-width: 768px) { .md\:col-6 { width: 50%; } }
@media (min-width: 992px) { .lg\:col-3 { width: 25%; } } /* Changed to col-3 for better fit of many items */
.mb-6 { margin-bottom: 3rem !important; }
.mb-4 { margin-bottom: 1.5rem !important; }
.h-full { height: 100% !important; }
.w-full { width: 100% !important; }
.h-10rem { height: 10rem !important; }
.flex { display: flex !important; }
.align-items-center { align-items: center !important; }
.justify-content-center { justify-content: center !important; }
.text-center { text-align: center !important; }
.border-round-top-xl { border-top-left-radius: 12px; border-top-right-radius: 12px; }
.text-5xl { font-size: 3rem; }
.text-lg { font-size: 1.15rem; }
.text-gray-400 { color: #9ca3af; }
.font-bold { font-weight: 700; }
.gap-2 { gap: 0.5rem; }
.mt-auto { margin-top: auto; }
</style>
