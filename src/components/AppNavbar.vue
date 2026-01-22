<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import Button from 'primevue/button';
import Drawer from 'primevue/drawer'; 
import Dialog from 'primevue/dialog';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { t, locale } = useI18n();
const isMobileMenuOpen = ref(false);
const isStoreDialogOpen = ref(false);

const items = computed(() => [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.products'), path: '/products' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.blog'), path: '/blog' },
    { label: t('nav.contact'), path: '/contact' }
]);

// Theme Logic
const isDark = ref(false);

const toggleTheme = () => {
    isDark.value = !isDark.value;
};

// Sync Theme with DOM
watch(isDark, (val) => {
    const element = document.querySelector('html');
    if (val) {
        element.classList.add('my-app-dark');
    } else {
        element.classList.remove('my-app-dark');
    }
});

// Language Logic
const toggleLanguage = () => {
    locale.value = locale.value === 'tr' ? 'en' : 'tr';
};

const navTo = (path) => {
    router.push(path);
    isMobileMenuOpen.value = false;
};

const openStoreModal = () => {
    isStoreDialogOpen.value = true;
};
</script>

<template>
    <div class="navbar-wrapper">
        <!-- Force background color via inline style to guarantee contrast -->
        <header class="main-header shadow-md" 
                :style="{ backgroundColor: isDark ? '#0f172a' : 'rgba(255, 255, 255, 0.95)', borderBottom: isDark ? '1px solid #1e293b' : '1px solid rgba(0,0,0,0.05)' }">
            <div class="container navbar-inner">
                
                <!-- Logo -->
                <div class="logo-container" @click="router.push('/')">
                    <div class="logo-box">
                        <i class="pi pi-building logo-icon"></i>
                    </div>
                    <div class="logo-text-group">
                        <!-- Force text color via inline style -->
                        <span class="logo-title" :style="{ color: isDark ? '#f8fafc' : '#1f2937' }">CİVANLAR</span>
                        <span class="logo-subtitle">İNŞAAT & YAPI</span>
                    </div>
                </div>

                <!-- Desktop Menu (Hidden on mobile via CSS) -->
                <nav class="desktop-menu">
                    <a v-for="(item, index) in items" :key="index" 
                       @click="navTo(item.path)" 
                       class="menu-link" 
                       :style="{ color: isDark ? '#e2e8f0' : '#1f2937' }"
                       v-ripple>
                        {{ item.label }}
                    </a>
                    
                    <!-- Online Store Link (Future Proof) -->
                    <a @click="openStoreModal" 
                       class="menu-link store-link" 
                       :style="{ color: 'var(--c-primary)' }"
                       v-ripple>
                       <i class="pi pi-shopping-bag mr-1"></i> {{ t('nav.onlineStore') }}
                    </a>
                </nav>

                <!-- Right Actions (Hidden on small mobile via CSS) -->
                <div class="right-actions gap-3">
                    <!-- Theme Toggle -->
                    <Button 
                        :icon="isDark ? 'pi pi-moon' : 'pi pi-sun'" 
                        class="theme-btn p-button-rounded p-button-text" 
                        @click="toggleTheme" 
                        :style="{ color: isDark ? '#fff' : '#374151' }"
                        v-tooltip.bottom="'Toggle Theme'"
                    />

                    <!-- Language Switcher -->
                    <div class="lang-switch-container" @click="toggleLanguage" 
                         :style="{ backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'transparent' }">
                        <div v-if="locale === 'tr'" class="flag-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="24" height="16" class="shadow-sm border-round-sm">
                                <rect width="1200" height="800" fill="#E30A17"/>
                                <circle cx="444" cy="400" r="200" fill="#fff"/>
                                <circle cx="480" cy="400" r="160" fill="#E30A17"/>
                                <path fill="#fff" d="M583.334 400l180.901 58.779-111.804-153.88v190.202l111.804-153.88z"/>
                            </svg>
                            <span class="lang-code" :style="{ color: isDark ? '#e2e8f0' : '#1f2937' }">TR</span>
                        </div>
                        <div v-else class="flag-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="24" height="16" class="shadow-sm border-round-sm">
                                <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
                                <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
                                <g clip-path="url(#s)">
                                    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
                                    <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/>
                                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
                                    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
                                </g>
                            </svg>
                            <span class="lang-code" :style="{ color: isDark ? '#e2e8f0' : '#1f2937' }">EN</span>
                        </div>
                    </div>

                    <!-- CTA -->
                    <Button 
                        :label="t('nav.getQuote')" 
                        icon="pi pi-arrow-right" 
                        iconPos="right" 
                        class="p-button-sm shadow-2 border-round-3xl font-bold px-4 brand-cta desktop-cta" 
                        @click="router.push('/contact')" 
                    />
                </div>

                <!-- Mobile Menu Button -->
                <div class="mobile-toggle">
                     <Button icon="pi pi-bars" @click="isMobileMenuOpen = true" class="p-button-text" 
                             :style="{ color: isDark ? '#fff' : '#374151' }" />
                </div>
            </div>
        </header>

        <!-- Mobile Drawer -->
        <Drawer v-model:visible="isMobileMenuOpen" position="right" class="mobile-drawer border-none" style="width: 85vw; max-width: 320px;">
            <template #header>
                <div class="flex align-items-center gap-2">
                     <div class="logo-box h-2rem w-2rem border-round-sm flex align-items-center justify-content-center bg-primary">
                        <i class="pi pi-building text-white text-sm"></i>
                     </div>
                     <span class="font-bold text-xl text-primary">CİVANLAR</span>
                </div>
            </template>
            <div class="flex flex-column h-full">
                <!-- Menu Items -->
                <div class="flex flex-column gap-2 mt-3">
                    <a v-for="(item, index) in items" :key="index" 
                    @click="navTo(item.path)" 
                    class="mobile-link p-3 border-round-lg cursor-pointer flex align-items-center transition-duration-200"
                    :class="{'text-primary surface-100 font-bold': router.currentRoute.value.path === item.path, 'text-700 hover:surface-50': router.currentRoute.value.path !== item.path}"
                    v-ripple>
                        <i class="pi mr-3 text-lg" :class="{'pi-home': index===0, 'pi-info-circle': index===1, 'pi-box': index===2, 'pi-briefcase': index===3, 'pi-pencil': index===4, 'pi-envelope': index===5 }"></i>
                        <span class="text-lg font-medium">{{ item.label }}</span>
                        <i class="pi pi-angle-right ml-auto text-400 text-sm"></i>
                    </a>

                     <!-- Store Link -->
                     <a @click="openStoreModal" 
                        class="mobile-link p-3 border-round-lg cursor-pointer flex align-items-center text-primary hover:surface-50 transition-duration-200 font-bold">
                        <i class="pi pi-shopping-bag mr-3 text-lg"></i> 
                        <span class="text-lg">{{ t('nav.onlineStore') }}</span>
                         <span class="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 border-round">New</span>
                    </a>
                </div>

                <!-- Bottom Actions -->
                <div class="mt-auto pt-4 border-top-1 border-200">
                    <div class="flex align-items-center justify-content-between mb-4 px-2">
                        <span class="text-sm font-medium text-500">Appearance</span>
                         <Button 
                            :icon="isDark ? 'pi pi-moon' : 'pi pi-sun'" 
                            class="p-button-rounded p-button-text p-button-sm" 
                            @click="toggleTheme" 
                        />
                    </div>
                     <Button 
                        :label="t('nav.getQuote')" 
                        icon="pi pi-arrow-right"
                        iconPos="right"
                        class="w-full brand-cta py-3 border-round-xl font-bold text-lg shadow-2" 
                        @click="navTo('/contact')" 
                    />
                </div>
            </div>
        </Drawer>
        
        <!-- Store Modal (Future Proof) -->
        <Dialog v-model:visible="isStoreDialogOpen" modal :header="t('common.comingSoonTitle')" :style="{ width: '400px' }">
            <div class="flex flex-column align-items-center text-center p-2">
                <i class="pi pi-clock text-6xl text-primary mb-4"></i>
                <p class="text-lg line-height-3">{{ t('common.comingSoonDesc') }}</p>
                <Button label="OK" @click="isStoreDialogOpen = false" class="mt-4 p-button-outlined" />
            </div>
        </Dialog>
    </div>
</template>

<style scoped>
.navbar-wrapper {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.main-header {
    height: 80px;
    display: flex;
    align-items: center;
    transition: background-color 0.3s ease;
}

.navbar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

/* Logo */
.logo-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    min-width: 160px;
}

.logo-box {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--c-primary) 0%, var(--c-primary-light) 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px -1px rgba(30, 58, 138, 0.2);
}

.logo-icon { font-size: 1.25rem; color: white; }

.logo-title {
    font-family: var(--font-heading);
    font-size: 1.35rem;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.5px;
}

.logo-subtitle {
    font-size: 0.6rem;
    font-weight: 700;
    color: var(--c-secondary);
    letter-spacing: 2px;
    text-transform: uppercase;
    display: block;
}

/* Desktop Menu */
.desktop-menu {
    display: flex;
    gap: 0.5rem;
}
.menu-link {
    padding: 0.6rem 1rem;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.95rem;
    color: var(--c-text-main);
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    display: flex; 
    align-items: center;
}

.menu-link:hover {
    background-color: rgba(0,0,0,0.04);
    color: var(--c-primary);
}

.store-link {
    font-weight: 700 !important;
    background-color: rgba(37, 211, 102, 0.05); /* Subtle green hint or brand hint */
}
.store-link:hover {
    background-color: rgba(37, 211, 102, 0.1) !important;
}

/* Right Actions */
.right-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.lang-switch-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s;
}
.lang-switch-container:hover { background: rgba(0,0,0,0.04); }

.brand-cta {
    background-color: var(--c-secondary) !important;
    border: none !important;
    color: white !important;
}

/* RESPONSIVE CONTROL (Replacing flaky utility classes) */
@media (max-width: 1024px) {
    .desktop-menu { display: none; }
    .desktop-cta { display: none !important; }
}

@media (min-width: 1025px) {
    .mobile-toggle { display: none; }
}

@media (max-width: 768px) {
    /* Adjustments for smaller screens if needed */
    .right-actions { gap: 0.5rem; }
}

/* Mobile Drawer */
:global(.p-drawer) {
    background: #ffffff !important;
}
:global(.my-app-dark) :global(.p-drawer) {
    background: #0f172a !important;
    color: #f1f5f9 !important;
}
:global(.p-dialog-mask) { z-index: 10000 !important; }
</style>
