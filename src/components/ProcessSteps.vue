<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section class="process-section">
    <div class="container text-center">
      <h2 class="section-title">{{ t('process.title') }}</h2>
      <p class="section-subtitle">{{ t('process.subtitle') }}</p>

      <div class="process-grid">
        <!-- Step 1 -->
        <div class="process-item">
          <div class="icon-circle">
            <i class="pi pi-phone icon"></i>
          </div>
          <h3 class="item-title">{{ t('process.step1_title') }}</h3>
          <p class="item-desc">{{ t('process.step1_desc') }}</p>
        </div>

        <!-- Step 2 -->
        <div class="process-item">
          <div class="icon-circle">
            <i class="pi pi-file-edit icon"></i>
          </div>
          <h3 class="item-title">{{ t('process.step2_title') }}</h3>
          <p class="item-desc">{{ t('process.step2_desc') }}</p>
        </div>

        <!-- Step 3 -->
        <div class="process-item">
          <div class="icon-circle">
            <i class="pi pi-briefcase icon"></i> 
            <!-- specific handshake icon might not exist in basic PrimeIcons, using briefcase as professional substitute or pi-users -->
          </div>
          <h3 class="item-title">{{ t('process.step3_title') }}</h3>
          <p class="item-desc">{{ t('process.step3_desc') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process-section {
  padding: 5rem 0;
  background-color: var(--c-bg-light); /* Anthracite background */
  border-bottom: 1px solid var(--c-border);
}

.text-center {
  text-align: center;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--c-text-main); /* White/Light Text */
  margin-bottom: 0.75rem;
  letter-spacing: -1px;
}

.section-subtitle {
  color: var(--c-text-muted); /* Muted Gray */
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.process-grid {
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
}

.process-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  position: relative;
}

.icon-circle {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: var(--c-bg-white); /* Slightly lighter anthracite card bg */
  border: 2px solid var(--c-border);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
  position: relative;
  z-index: 2;
}

.icon {
  font-size: 3rem;
  color: var(--c-secondary); /* Amber/Gold */
  transition: transform 0.3s ease;
}

.process-item:hover .icon-circle {
  border-color: var(--c-primary);
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.15); /* Gold glow */
  transform: translateY(-5px);
}

.process-item:hover .icon {
  transform: scale(1.1);
  color: var(--c-primary);
}

.item-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--c-text-main);
  margin-bottom: 1rem;
}

.item-desc {
  font-size: 0.95rem;
  color: var(--c-text-muted);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .process-grid {
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
