<script setup>
import ContactForm from '../components/ContactForm.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="contact-view main-content-pad">
    <div class="container">
      <div class="text-center mb-6">
        <h1 class="page-title">{{ t('contact.title') }}</h1>
        <p class="page-subtitle">{{ t('contact.subtitle') }}</p>
      </div>

      <div class="grid justify-content-center">
        <div class="col-12 md:col-8 mb-4">
            <div class="info-card card shadow-1 p-5 border-round-xl surface-card h-full">
                <h3 class="text-2xl font-bold text-primary mb-4">{{ t('contact.visit') }}</h3>
                <div class="info-item mb-4 flex">
                    <div class="icon-box mr-3"><i class="pi pi-map-marker text-xl"></i></div>
                    <div>
                        <span class="block font-bold mb-1">{{ t('contact.addressLabel') }}</span>
                        <p class="m-0 text-700">İstinye Park & MIT Area, Sarıyer, İstanbul</p>
                    </div>
                </div>

                <div class="info-item mb-4 flex">
                    <div class="icon-box mr-3"><i class="pi pi-phone text-xl"></i></div>
                    <div>
                        <span class="block font-bold mb-1">{{ t('contact.call') }}</span>
                        <p class="m-0 text-700">+90 555 123 4567</p>
                    </div>
                </div>

                <div class="info-item mb-4 flex">
                    <div class="icon-box mr-3"><i class="pi pi-envelope text-xl"></i></div>
                    <div>
                        <span class="block font-bold mb-1">{{ t('contact.emailUs') }}</span>
                        <p class="m-0 text-700">info@civanlar.com</p>
                    </div>
                </div>

                <div class="info-item flex">
                    <div class="icon-box mr-3"><i class="pi pi-clock text-xl"></i></div>
                    <div>
                        <span class="block font-bold mb-1">{{ t('contact.hours') }}</span>
                        <p class="m-0 text-700">{{ t('contact.days') }}</p>
                        <p class="m-0 text-secondary font-bold">{{ t('contact.closed') }}</p>
                    </div>
                </div>

                <!-- Map Placeholder -->
                <div class="map-container mt-5 border-round overflow-hidden" style="height: 350px; background: #eee;">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.0000000000005!2d29.02!3d41.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA2JzM2LjAiTiAyOcKwMDEnMTIuMCJF!5e0!3m2!1sen!2str!4v1630000000000!5m2!1sen!2str" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
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
:global(.my-app-dark) .page-title { color: var(--c-primary); }

.page-subtitle {
     font-size: 1.25rem;
    color: var(--c-text-muted);
}
:global(.my-app-dark) .page-subtitle { color: var(--c-text-muted); }

.surface-card {
    background-color: var(--c-bg-white);
    border: 1px solid var(--c-border);
}
:global(.my-app-dark) .surface-card {
    background-color: var(--c-bg-white);
    border-color: var(--c-border);
}

/* Dark Default */
.icon-box {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(251, 191, 36, 0.1); 
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--c-primary);
}
:global(.my-app-dark) .icon-box {
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--c-primary);
}

.text-700 { color: var(--c-text-main); }
:global(.my-app-dark) .text-700 { color: var(--c-text-main); }

.text-primary { color: var(--c-primary); }
:global(.my-app-dark) .text-primary { color: var(--c-primary); }

/* Utilities */
.grid { display: flex; flex-wrap: wrap; margin-right: -0.5rem; margin-left: -0.5rem; }
.col-12 { width: 100%; padding: 0.5rem; }
@media (min-width: 768px) {
    .md\:col-6 { width: 50%; }
    .md\:pl-5 { padding-left: 2rem !important; }
}
.mb-6 { margin-bottom: 3rem !important; }
.mb-4 { margin-bottom: 1.5rem !important; }
.mt-5 { margin-top: 2rem !important; }
.mr-3 { margin-right: 1rem !important; }
.mb-1 { margin-bottom: 0.25rem !important; }
.p-5 { padding: 2rem !important; }
.h-full { height: 100% !important; }
.flex { display: flex !important; }
.text-center { text-align: center !important; }
.shadow-1 { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06) !important; }
.border-round-xl { border-radius: 0.75rem !important; }
.border-round { border-radius: 0.25rem !important; }
.font-bold { font-weight: 700 !important; }
.block { display: block !important; }
.m-0 { margin: 0 !important; }
.overflow-hidden { overflow: hidden !important; }
</style>
