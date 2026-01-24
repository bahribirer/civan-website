<script setup>
import Button from 'primevue/button';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { t } = useI18n();
</script>

<template>
  <section class="hero-section">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="content-wrapper">
         <span class="hero-label">{{ t('hero.label') }}</span>
         <h1 class="hero-title" v-html="t('hero.title')"></h1>
         <p class="hero-subtitle">
            {{ t('hero.subtitle') }}
         </p>
         <div class="hero-actions">
           <Button :label="t('nav.getQuote')" icon="pi pi-arrow-right" iconPos="right" class="p-button-lg p-button-warning action-btn shadow-4" @click="router.push('/contact')" />
           <Button :label="t('nav.exploreProducts')" icon="pi pi-box" class="p-button-lg p-button-outlined text-white action-btn ml-3" @click="router.push('/products')" />
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  height: 700px;
  /* Anthracite Base with Gold Glows - Lighter & Richer */
  background: radial-gradient(circle at top right, rgba(251, 191, 36, 0.25) 0%, transparent 45%),
              radial-gradient(circle at bottom left, rgba(245, 158, 11, 0.2) 0%, transparent 45%),
              linear-gradient(135deg, #2b3036 0%, #4b5563 100%); /* Lighter Anthracite to Slate Gray */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
  overflow: hidden;
  margin-top: -1px; /* overlap border */
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  background-image: repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px, transparent 2px, transparent 4px);
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.content-wrapper {
  max-width: 800px;
  animation: slideUp 0.8s ease-out;
}

.hero-label {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 1.5rem;
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.hero-title {
  font-size: 4.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: white;
  font-weight: 800;
  letter-spacing: -1px;
}

.highlight {
    color: #f59e0b; /* Amber 500 */
    position: relative;
    display: inline-block;
}

.hero-subtitle {
  font-size: 1.35rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.6;
  max-width: 600px;
  color: #e2e8f0;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.action-btn {
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 8px;
    transition: transform 0.2s;
}

.action-btn:hover {
    transform: translateY(-2px);
}

.ml-3 { margin-left: 1rem; }

/* Animation */
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
      height: 600px;
  }
  .hero-title {
    font-size: 2.75rem;
  }
  .hero-subtitle {
      font-size: 1.1rem;
  }
}
</style>
