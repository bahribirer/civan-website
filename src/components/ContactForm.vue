<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import Message from 'primevue/message';

const { t } = useI18n();

const form = ref({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
});

const submitted = ref(false);

const sendMessage = () => {
    // Simulate send
    console.log(form.value);
    submitted.value = true;
    setTimeout(() => submitted.value = false, 3000);
}
</script>

<template>
  <div class="contact-form-card card shadow-1 p-5 border-round-xl surface-card">
    <h3 class="text-2xl font-bold text-primary mb-4">{{ t('contact.formTitle') }}</h3>
    
    <div class="formgrid grid">
        <div class="field col-12 mb-3">
            <label for="name" class="block mb-2 font-bold">{{ t('contact.name') }}</label>
            <InputText id="name" v-model="form.name" class="w-full" :placeholder="t('contact.name')" />
        </div>
        <div class="field col-12 md:col-6 mb-3">
            <label for="email" class="block mb-2 font-bold">{{ t('contact.email') }}</label>
            <InputText id="email" v-model="form.email" class="w-full" :placeholder="t('contact.email')" />
        </div>
        <div class="field col-12 md:col-6 mb-3">
            <label for="phone" class="block mb-2 font-bold">{{ t('contact.phone') }}</label>
            <InputText id="phone" v-model="form.phone" class="w-full" :placeholder="t('contact.phone')" />
        </div>
        <div class="field col-12 mb-3">
            <label for="subject" class="block mb-2 font-bold">{{ t('contact.subject') }}</label>
            <InputText id="subject" v-model="form.subject" class="w-full" :placeholder="t('contact.subject')" />
        </div>
         <div class="field col-12 mb-4">
            <label for="message" class="block mb-2 font-bold">{{ t('contact.message') }}</label>
            <Textarea id="message" v-model="form.message" rows="5" class="w-full" :placeholder="t('contact.message')" />
        </div>
        <div class="field col-12">
            <Button :label="t('contact.send')" icon="pi pi-send" class="w-full p-button-lg" @click="sendMessage" />
        </div>
    </div>
    
    <Message v-if="submitted" severity="success" class="mt-3">{{ t('contact.success') }}</Message>
  </div>
</template>

<style scoped>
.surface-card {
    background-color: var(--p-surface-0);
}
:global(.my-app-dark) .surface-card {
    background-color: var(--p-surface-800);
}

.text-primary { color: var(--c-primary); }
:global(.my-app-dark) .text-primary { color: var(--c-primary-light); }

.grid { display: flex; flex-wrap: wrap; margin: -0.5rem; }
.col-12 { width: 100%; padding: 0.5rem; }
@media (min-width: 768px) {
    .md\:col-6 { width: 50%; }
}
.w-full { width: 100%; }
.mb-3 { margin-bottom: 1rem; }
.mb-4 { margin-bottom: 1.5rem; }
.mb-2 { margin-bottom: 0.5rem; }
.block { display: block; }

.grid { display: flex; flex-wrap: wrap; margin-right: -0.5rem; margin-left: -0.5rem; margin-top: -0.5rem; }
.col-12 { flex: 0 0 auto; padding: 0.5rem; width: 100%; }
@media (min-width: 768px) {
    .md\:col-6 { flex: 0 0 auto; padding: 0.5rem; width: 50%; }
}
</style>
