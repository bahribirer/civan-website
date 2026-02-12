<script setup>
import { ref } from 'vue';
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { t } = useI18n();

const slides = ref([
    {
        image: 'https://placehold.co/1920x800?text=Hero+Image+1',
        title: t('hero.title'),
        subtitle: t('hero.subtitle'),
        hasContent: true 
    },
    {
        image: 'https://placehold.co/1920x800?text=Hero+Image+2',
        title: 'Kaliteli Yalıtım Çözümleri',
        subtitle: 'Projeleriniz için en iyi su ve ısı yalıtım ürünleri.',
        hasContent: true
    },
    {
        image: 'https://placehold.co/1920x800?text=Hero+Image+3',
        hasContent: false
    }
]);
</script>

<template>
  <section class="hero-carousel-section">
    <Carousel :value="slides" :numVisible="1" :numScroll="1" :circular="true" :autoplayInterval="5000" :showNavigators="false" :showIndicators="true" class="hero-carousel">
        <template #item="slotProps">
            <div class="hero-slide" :style="{ backgroundImage: `url(${slotProps.data.image})` }">
                <div class="overlay"></div>
                <div v-if="slotProps.data.hasContent" class="container content-container">
                    <div class="slide-content">
                        <span class="slide-label" v-if="slotProps.index === 0">{{ t('hero.label') }}</span>
                        <h1 class="slide-title" v-html="slotProps.data.title"></h1>
                        <p class="slide-subtitle">{{ slotProps.data.subtitle }}</p>
                        <div class="slide-actions" v-if="slotProps.index === 0">
                            <Button :label="t('nav.getQuote')" icon="pi pi-arrow-right" iconPos="right" class="p-button-lg p-button-warning action-btn shadow-4" @click="router.push('/contact')" />
                            <Button :label="t('nav.exploreProducts')" icon="pi pi-box" class="p-button-lg p-button-outlined text-white action-btn ml-3" @click="router.push('/products')" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Carousel>
  </section>
</template>

<style scoped>
.hero-carousel-section {
    width: 100%;
    position: relative;
    /* Ensure no gap if navbar is overlaid or adjacent */
}

.hero-carousel {
    width: 100%;
}

.hero-slide {
    height: 700px;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Dark overlay for text readability */
    z-index: 1;
}

.content-container {
    position: relative;
    z-index: 2;
    width: 100%;
}

.slide-content {
    max-width: 800px;
    color: white;
    animation: fadeInUp 0.8s ease-out;
}

.slide-label {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 1.5rem;
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.4);
    text-transform: uppercase;
}

.slide-title {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.slide-subtitle {
    font-size: 1.25rem;
    opacity: 0.95;
    margin-bottom: 2.5rem;
    line-height: 1.6;
    max-width: 600px;
    text-shadow: 0 2px 5px rgba(0,0,0,0.3);
}

.action-btn {
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 8px;
}

.ml-3 { margin-left: 1rem; }

/* PrimeVue Carousel Indicator Styling */
:deep(.p-carousel-indicators) {
    position: absolute;
    bottom: 30px;
    width: 100%;
    justify-content: center;
    gap: 0.8rem;
    z-index: 10;
    margin: 0;
    padding: 0;
}

:deep(.p-carousel-indicator) {
    margin: 0;
}

:deep(.p-carousel-indicator-button) {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.4) !important;
    border: 2px solid rgba(255, 255, 255, 0.6) !important;
    padding: 0;
    transition: all 0.3s;
}

:deep(.p-carousel-indicator.p-active .p-carousel-indicator-button) {
    background-color: var(--c-primary) !important; /* Orange Active */
    border-color: var(--c-primary) !important;
    width: 14px;
    height: 14px; /* Slightly larger for active */
    box-shadow: 0 0 15px rgba(234, 88, 12, 0.6);
}

/* Animations */
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 768px) {
    .hero-slide { height: 500px; }
    .slide-title { font-size: 2.5rem; }
    .slide-subtitle { font-size: 1rem; }
}
</style>
