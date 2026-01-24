<script setup>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="services-view main-content-pad">
    <div class="container">
       <div class="text-center mb-8">
        <h1 class="page-title">{{ t('services.title') }}</h1>
        <p class="page-subtitle">{{ t('services.subtitle') }}</p>
      </div>

      <div class="services-container card p-0">
        <Tabs value="0">
            <TabList class="custom-tablist">
                <Tab value="0" class="custom-tab">{{ t('services.tabs.store') }}</Tab>
                <Tab value="1" class="custom-tab">{{ t('services.tabs.construction') }}</Tab>
                <Tab value="2" class="custom-tab">{{ t('services.tabs.renovation') }}</Tab>
                <Tab value="3" class="custom-tab">{{ t('services.tabs.turnkey') }}</Tab>
                <Tab value="4" class="custom-tab">{{ t('services.tabs.supply') }}</Tab>
            </TabList>
            <TabPanels class="custom-panels">
                <TabPanel value="0">
                    <div class="service-content fadein">
                        <div class="text-area">
                            <h3>{{ t('services.store.title') }}</h3>
                            <p class="desc">{{ t('services.store.desc') }}</p>
                            <ul class="feature-list">
                                <li v-for="(item, index) in [0,1,2,3]" :key="index">
                                    <i class="pi pi-check-circle"></i> {{ t(`services.store.list.${index}`) }}
                                </li>
                            </ul>
                        </div>
                        <div class="visual-area bg-blue-50">
                            <i class="pi pi-shopping-cart text-primary"></i>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="1">
                     <div class="service-content fadein">
                        <div class="text-area">
                            <h3>{{ t('services.construction.title') }}</h3>
                            <p class="desc">{{ t('services.construction.desc') }}</p>
                            <ul class="feature-list">
                                <li v-for="(item, index) in [0,1,2,3]" :key="index">
                                    <i class="pi pi-check-circle"></i> {{ t(`services.construction.list.${index}`) }}
                                </li>
                            </ul>
                        </div>
                        <div class="visual-area bg-orange-50">
                            <i class="pi pi-building text-secondary"></i>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="2">
                     <div class="service-content fadein">
                        <div class="text-area">
                            <h3>{{ t('services.renovation.title') }}</h3>
                            <p class="desc">{{ t('services.renovation.desc') }}</p>
                            <ul class="feature-list">
                                <li v-for="(item, index) in [0,1,2,3]" :key="index">
                                    <i class="pi pi-check-circle"></i> {{ t(`services.renovation.list.${index}`) }}
                                </li>
                            </ul>
                        </div>
                        <div class="visual-area bg-green-50">
                            <i class="pi pi-home text-green-600"></i>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="3">
                     <div class="service-content fadein">
                        <div class="text-area">
                            <h3>{{ t('services.turnkey.title') }}</h3>
                            <p class="desc">{{ t('services.turnkey.desc') }}</p>
                            <ul class="feature-list">
                                <li v-for="(item, index) in [0,1,2,3]" :key="index">
                                    <i class="pi pi-check-circle"></i> {{ t(`services.turnkey.list.${index}`) }}
                                </li>
                            </ul>
                        </div>
                        <div class="visual-area bg-purple-50">
                            <i class="pi pi-key text-purple-600"></i>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="4">
                     <div class="service-content fadein">
                        <div class="text-area">
                            <h3>{{ t('services.supply.title') }}</h3>
                            <p class="desc">{{ t('services.supply.desc') }}</p>
                            <ul class="feature-list">
                                <li v-for="(item, index) in [0,1,2,3]" :key="index">
                                    <i class="pi pi-check-circle"></i> {{ t(`services.supply.list.${index}`) }}
                                </li>
                            </ul>
                        </div>
                        <div class="visual-area bg-gray-50">
                            <i class="pi pi-truck text-gray-600"></i>
                        </div>
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>
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
    color: var(--c-primary);
    margin-bottom: 1rem;
    letter-spacing: -1px;
}
/* Dark Mode Overrides - Using Global Variables for Consistency */
:global(.my-app-dark) .page-title { color: var(--c-primary) !important; }

.page-subtitle {
     font-size: 1.35rem;
    color: var(--c-text-muted);
    font-weight: 300;
}
:global(.my-app-dark) .page-subtitle { color: var(--c-text-muted) !important; }

.services-container {
    background: var(--c-bg-white);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid var(--c-border);
    box-shadow: var(--shadow-lg);
}
:global(.my-app-dark) .services-container {
    background: var(--c-bg-white) !important;
    border-color: var(--c-border) !important;
}

.custom-tablist {
    background-color: var(--c-bg-light);
    border-bottom: 1px solid var(--c-border);
    padding: 0 1rem;
}
:global(.my-app-dark) .custom-tablist {
    background-color: var(--c-bg-light) !important;
    border-color: var(--c-border) !important;
}

.custom-tab {
    padding: 1.75rem 2.5rem;
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--c-text-muted);
    transition: all 0.3s;
    background: transparent;
    border-bottom: 3px solid transparent;
}
:global(.my-app-dark) .custom-tab { color: var(--c-text-muted) !important; }

.custom-tab:hover {
    color: var(--c-primary);
    background-color: rgba(0,0,0,0.02);
}
:global(.my-app-dark) .custom-tab:hover { color: var(--c-text-main) !important; background-color: rgba(255,255,255,0.05) !important; }

:deep(.p-tab-active) {
    color: var(--c-primary) !important;
    border-bottom-color: var(--c-primary) !important;
}
:global(.my-app-dark) :deep(.p-tab-active) {
    color: var(--c-primary) !important;
    border-bottom-color: var(--c-primary) !important;
}

/* Force Transparency on PrimeVue Tab Wrappers */
:deep(.p-tabs), :deep(.p-tabpanels), :deep(.p-tabpanel) {
    background: transparent !important;
    color: var(--c-text-main) !important;
}
:global(.my-app-dark) :deep(.p-tabpanels) {
    background: transparent !important;
}

/* Service Content Layout */
.service-content {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    min-height: 500px;
}

.fadein {
    animation: fadein 0.5s ease-in-out;
}

.text-area {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.text-area h3 {
    font-size: 2.25rem;
    color: var(--c-primary);
    margin-bottom: 1.5rem;
}
:global(.my-app-dark) .text-area h3 { color: var(--c-primary) !important; }

.desc {
    font-size: 1.15rem;
    line-height: 1.7;
    color: var(--c-text-main);
    margin-bottom: 2.5rem;
    opacity: 0.9;
}
:global(.my-app-dark) .desc { color: var(--c-text-main) !important; }

.feature-list {
    list-style: none;
    padding: 0;
}

.feature-list li {
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.1rem;
    color: var(--c-text-main);
    font-weight: 500;
}
:global(.my-app-dark) .feature-list li { color: var(--c-text-main) !important; }

.feature-list i {
    color: var(--c-secondary);
    font-size: 1.25rem;
    background: rgba(245, 158, 11, 0.1);
    padding: 0.25rem;
    border-radius: 50%;
}

/* Visual Area */
.visual-area {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10rem;
    position: relative;
    overflow: hidden;
}

/* Use standard CSS classes or vars for bg colors to avoid build errors. 
   Defining local classes to be safe */
/* Use subtle dark-compatible tints instead of solid light colors */
.bg-blue-50 { background-color: rgba(59, 130, 246, 0.05); }
.bg-orange-50 { background-color: rgba(249, 115, 22, 0.05); }
.bg-green-50 { background-color: rgba(34, 197, 94, 0.05); }
.bg-purple-50 { background-color: rgba(168, 85, 247, 0.05); }
.bg-gray-50 { background-color: rgba(255, 255, 255, 0.03); }
.text-gray-600 { color: var(--c-text-muted); }

:global(.my-app-dark) .visual-area {
    background-color: transparent !important; 
}

/* Icons in Visual Area */
.visual-area i {
    z-index: 1;
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
}

@keyframes fadein {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 900px) {
    .service-content {
        grid-template-columns: 1fr;
    }
    .visual-area {
        height: 250px;
        order: -1; 
        font-size: 6rem;
    }
    .text-area { padding: 2rem; }
    .custom-tab { padding: 1rem; font-size: 0.9rem; }
}
</style>
