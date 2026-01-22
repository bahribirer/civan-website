<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="about-view main-content-pad">
    <div class="container">
       <div class="text-center mb-8">
        <h1 class="page-title">{{ t('about.title') }}</h1>
        <p class="page-subtitle">{{ t('about.subtitle') }}</p>
      </div>

      <div class="card p-5 mb-5 surface-card shadow-lg">
        <div class="grid">
            <div class="col-12 md:col-6 flex align-items-center">
                 <!-- Placeholder for Team/Office Image -->
                 <div class="image-placeholder border-round-xl w-full h-20rem bg-gray-100 flex align-items-center justify-content-center">
                    <i class="pi pi-image text-400 text-5xl"></i>
                    <span class="ml-2 text-500">{{ t('about.teamPhoto') }}</span>
                 </div>
            </div>
            <div class="col-12 md:col-6 pl-4 md:pl-6 flex flex-column justify-content-center">
                <h2 class="text-3xl text-primary mb-3">{{ t('about.whoWeAre') }}</h2>
                <p class="line-height-3 text-lg text-main mb-3">
                    {{ t('about.desc1') }}
                </p>
                <p class="line-height-3 text-lg text-main">
                    {{ t('about.desc2') }}
                </p>
            </div>
        </div>
      </div>

      <div class="grid mt-6">
        <div class="col-12 md:col-6 mb-4">
             <div class="card h-full p-5 surface-card shadow-md hover-glow">
                 <h3 class="text-2xl text-primary mb-4 flex align-items-center">
                    <i class="pi pi-compass text-secondary mr-2 text-3xl"></i> {{ t('about.ourApproach') }}
                 </h3>
                 <p class="line-height-3 text-lg text-main">
                    {{ t('about.approachDesc') }}
                 </p>
             </div>
        </div>
        <div class="col-12 md:col-6 mb-4">
             <div class="card h-full p-5 surface-card shadow-md hover-glow">
                 <h3 class="text-2xl text-primary mb-4 flex align-items-center">
                    <i class="pi pi-star text-secondary mr-2 text-3xl"></i> {{ t('about.whyChoose') }}
                 </h3>
                 <ul class="list-none p-0 m-0">
                     <li v-for="(item, index) in 5" :key="index" class="flex align-items-center mb-3">
                         <i class="pi pi-check-circle text-green-500 mr-3"></i>
                         <span class="text-lg text-main">{{ t(`about.reasons.${index + 1}`) }}</span>
                     </li>
                 </ul>
             </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.main-content-pad {
    padding: 6rem 0;
    min-height: 80vh;
}

.page-title {
    font-size: 3rem;
    font-weight: 800;
    color: var(--c-primary);
    margin-bottom: 0.5rem;
    letter-spacing: -1px;
}
:global(.my-app-dark) .page-title { color: var(--c-primary-light); }

.page-subtitle {
    font-size: 1.25rem;
    color: var(--c-text-muted);
}

.text-main { color: var(--c-text-main); }
:global(.my-app-dark) .text-main { color: #e2e8f0; }

.text-400 { color: #94a3b8; }
.text-500 { color: #64748b; }

.hover-glow {
    transition: all 0.3s;
}
.hover-glow:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(30, 58, 138, 0.2);
    border-color: var(--c-primary-light);
}

/* Force Surface Card Dark Mode */
.surface-card {
    background-color: var(--c-bg-white);
    border: 1px solid var(--c-border);
    border-radius: 16px;
}

:global(.my-app-dark) .surface-card {
    background-color: #1e293b !important; /* Force Slate 800 */
    border-color: #334155 !important;
}

/* Utilities re-definition */
.grid { display: flex; flex-wrap: wrap; margin: -0.5rem; }
.col-12 { width: 100%; padding: 0.5rem; }
@media (min-width: 768px) { .md\:col-6 { width: 50%; } }
.flex { display: flex; }
.flex-column { flex-direction: column; }
.align-items-center { align-items: center; }
.justify-content-center { justify-content: center; }
.mb-8 { margin-bottom: 4rem; }
.mb-5 { margin-bottom: 3rem; }
.mb-3 { margin-bottom: 1rem; }
.pl-4 { padding-left: 1.5rem; }
@media(min-width: 768px) { .md\:pl-6 { padding-left: 3rem; } }
.w-full { width: 100%; }
.h-full { height: 100%; }
.h-20rem { height: 20rem; }
.text-center { text-align: center; }
.list-none { list-style: none; }
.p-0 { padding: 0; }
.m-0 { margin: 0; }
.p-5 { padding: 2rem; }
.border-round-xl { border-radius: 12px; }
.text-3xl { font-size: 1.75rem; font-weight: 700; }
.text-2xl { font-size: 1.5rem; font-weight: 700; }
.mr-2 { margin-right: 0.5rem; }
.mr-3 { margin-right: 1rem; }
.ml-2 { margin-left: 0.5rem; }
.line-height-3 { line-height: 1.6; }
.text-lg { font-size: 1.125rem; }
.text-green-500 { color: #10b981; }
.bg-gray-100 { background-color: #f1f5f9; }
:global(.my-app-dark) .bg-gray-100 { background-color: rgba(255,255,255,0.05); }
.shadow-lg { box-shadow: var(--shadow-lg); }
.shadow-md { box-shadow: var(--shadow-md); }
</style>
