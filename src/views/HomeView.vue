<script setup>
import HomeHero from '../components/HomeHero.vue';
import ServicesSection from '../components/ServicesSection.vue';
import AboutSummary from '../components/AboutSummary.vue';
</script>

<template>
  <div class="home-view">
    <HomeHero />
    
    <AboutSummary />

    <ServicesSection />
    
    <!-- CTA Section (Simple inline for now) -->
    <section class="cta-section py-6 text-center text-white bg-primary">
      <div class="container">
        <h2 class="text-white mb-3" style="color: white !important;">{{ $t('home_cta.title') }}</h2>
        <p class="mb-4 text-white" style="color: white !important; opacity: 0.9;">{{ $t('home_cta.desc') }}</p>
        <router-link to="/contact" class="cta-button">{{ $t('home_cta.button') }}</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.py-6 { padding: 6rem 0; }
.bg-primary { background-color: #1e293b; } /* Slate 800 - Classic Dark Gray */
:global(.my-app-dark) .bg-primary { background-color: #0f172a; }
.text-white { color: white; }
.text-center { text-align: center; }
.mb-4 { margin-bottom: 2rem; }

.cta-button {
  display: inline-block;
  background-color: var(--c-secondary);
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  border: 2px solid var(--c-secondary);
}

.cta-button:hover {
  background-color: transparent;
  color: var(--c-secondary);
  border-color: white; /* Or secondary */
  background-color: white;
  color: var(--c-primary);
}
</style>
