<script setup>
import Button from 'primevue/button';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { t } = useI18n();
</script>

<template>
  <section class="about-summary py-6">
    <div class="container hover-effect">
      <div class="grid-layout">
        <div class="text-content">
            <span class="eyebrow">{{ t('home_about.label') }}</span>
            <h2 class="section-title" v-html="t('home_about.title')"></h2>
            <p class="lead">
                {{ t('home_about.lead') }}
            </p>
            <p>
                {{ t('home_about.desc') }}
            </p>
            <ul class="feature-list">
                <li><i class="pi pi-check-circle"></i> {{ t('home_about.features.1') }}</li>
                <li><i class="pi pi-check-circle"></i> {{ t('home_about.features.2') }}</li>
                <li><i class="pi pi-check-circle"></i> {{ t('home_about.features.3') }}</li>
                <li><i class="pi pi-check-circle"></i> {{ t('home_about.features.4') }}</li>
            </ul>
            <Button :label="t('home_about.button')" class="mt-3" @click="router.push('/about')" />
        </div>
        <div class="image-content">
            <!-- Placeholder for image -->
            <div class="placeholder-image">
                <i class="pi pi-images"></i>
                <span>{{ t('home_about.imageAlt') }}</span>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.py-6 { padding: 5rem 0; }
.eyebrow {
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--c-secondary);
    letter-spacing: 2px;
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5rem;
}

.section-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--c-text-main);
}
.text-primary { color: var(--c-primary); }

.grid-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.lead {
    font-size: 1.15rem;
    font-weight: 500;
    color: var(--c-text-main);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.feature-list {
    list-style: none;
    padding: 0;
    margin: 2rem 0;
}

.feature-list li {
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.feature-list i {
    color: var(--c-secondary);
    font-size: 1.25rem;
}

.placeholder-image {
    width: 100%;
    height: 400px;
    background-color: #e5e7eb;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #9ca3af;
    font-size: 1.5rem;
}

.mt-3 { margin-top: 1.5rem; }

@media (max-width: 900px) {
    .grid-layout {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}
</style>
