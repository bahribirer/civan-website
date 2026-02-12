<script setup>
import Button from 'primevue/button';

defineProps({
    product: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="product-card">
        <div class="product-image">
            <img :src="product.image" :alt="product.name" />
        </div>
        <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-detail">{{ product.detail }}</p>
            <p class="product-price">{{ product.price }}</p>
            <Button :label="$t('home_new.contact_us')" class="contact-btn" />
        </div>
    </div>
</template>

<style scoped>
.product-card {
    background: white;
    border: 1px solid #eee;
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s, box-shadow 0.2s;
    height: 100%;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
}

.product-image {
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.product-image img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
}

.product-name {
    font-size: 1rem;
    color: var(--c-primary);
    font-weight: 700;
    margin-bottom: 0.5rem;
    line-height: 1.3;
}

.product-detail {
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 0.5rem;
}

.product-price {
    font-size: 0.85rem;
    color: var(--c-primary);
    font-weight: 600;
    margin-bottom: 1rem;
}

.contact-btn {
    background-color: var(--c-secondary);
    border: none;
    color: white;
    font-weight: 600;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    width: 100%;
}

.contact-btn:hover {
    background-color: var(--c-secondary-dark);
}
</style>
