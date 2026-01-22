<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const whatsappNumber = "905551234567"; // Placeholder, can be updated later
const openWhatsapp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
};
</script>

<template>
    <div class="whatsapp-fab shadow-lg" @click="openWhatsapp" v-tooltip.left="t('common.whatsapp')">
        <i class="pi pi-whatsapp"></i>
    </div>
</template>

<style scoped>
.whatsapp-fab {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: #25d366;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    cursor: pointer;
    z-index: 100000;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 2px solid white;
}

.whatsapp-fab:hover {
    transform: scale(1.1) rotate(10deg);
    box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
}

@media (max-width: 768px) {
    .whatsapp-fab {
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        bottom: 1.5rem;
        right: 1.5rem;
    }
}
</style>
