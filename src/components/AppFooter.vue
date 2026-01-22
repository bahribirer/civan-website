<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <footer class="app-footer">
    <div class="footer-top">
        <div class="container footer-content">
        <div class="footer-col brand-col">
            <div class="logo-container mb-3">
                <i class="pi pi-building text-primary text-3xl mr-2"></i>
                <div>
                    <span class="logo-text">CİVANLAR</span>
                    <span class="logo-subtext">İNŞAAT</span>
                </div>
            </div>
            <p class="brand-desc">
                {{ t('footer.desc') }}
            </p>
            <div class="social-links mt-3">
                <a href="#" class="social-icon"><i class="pi pi-instagram"></i></a>
                <a href="#" class="social-icon"><i class="pi pi-facebook"></i></a>
                <a href="#" class="social-icon"><i class="pi pi-linkedin"></i></a>
                <a href="#" class="social-icon"><i class="pi pi-twitter"></i></a>
            </div>
        </div>

        <div class="footer-col links-col">
            <h3>{{ t('footer.quickLinks') }}</h3>
            <ul class="footer-links">
            <li><router-link to="/"><i class="pi pi-angle-right"></i> {{ t('nav.home') }}</router-link></li>
            <li><router-link to="/about"><i class="pi pi-angle-right"></i> {{ t('nav.about') }}</router-link></li>
            <li><router-link to="/products"><i class="pi pi-angle-right"></i> {{ t('nav.products') }}</router-link></li>
            <li><router-link to="/services"><i class="pi pi-angle-right"></i> {{ t('nav.services') }}</router-link></li>
            <li><router-link to="/blog"><i class="pi pi-angle-right"></i> {{ t('nav.blog') }}</router-link></li>
            <li><router-link to="/contact"><i class="pi pi-angle-right"></i> {{ t('nav.contact') }}</router-link></li>
            </ul>
        </div>

        <div class="footer-col contact-col">
            <h3>{{ t('contact.title') }}</h3>
            <div class="contact-item">
                <div class="icon-box"><i class="pi pi-map-marker"></i></div>
                <div>
                    <span class="label">{{ t('contact.visit') }}</span>
                    <p>İstinye Park & MIT Area, Sarıyer, İstanbul</p>
                </div>
            </div>
            <div class="contact-item">
                <div class="icon-box"><i class="pi pi-phone"></i></div>
                <div>
                    <span class="label">{{ t('contact.call') }}</span>
                    <p>+90 555 123 4567</p>
                </div>
            </div>
            <div class="contact-item">
                <div class="icon-box"><i class="pi pi-envelope"></i></div>
                <div>
                    <span class="label">{{ t('contact.emailUs') }}</span>
                    <p>info@civanlar.com</p>
                </div>
            </div>
        </div>
        </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container flex justify-content-between align-items-center responsive-footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Civanlar İnşaat. {{ t('footer.rights') }}</p>
        <div class="legal-links">
            <a href="#">{{ t('footer.privacy') }}</a>
            <span class="separator">|</span>
            <a href="#">{{ t('footer.terms') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: #0f172a; /* Always dark for footer looks better generally */
  color: #94a3b8;
  font-size: 0.95rem;
  border-top: 1px solid transparent;
}

:global(.my-app-dark) .app-footer {
  background-color: #020617; /* Even darker in dark mode? Or same. Let's make it consistent. */
  border-top: 1px solid var(--p-surface-800);
}

.footer-top {
    padding: 5rem 0 3rem;
    background: radial-gradient(circle at top right, #1e293b 0%, transparent 35%);
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.2fr;
  gap: 4rem;
}

.logo-container {
    display: flex;
    align-items: center;
}

.logo-text {
    font-size: 1.5rem;
    font-weight: 800;
    color: #fff;
    display: block;
    line-height: 1;
}
.logo-subtext {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--c-secondary);
    letter-spacing: 2px;
}

.brand-desc {
    line-height: 1.6;
    margin-bottom: 1.5rem;
    max-width: 350px;
}

.footer-col h3 {
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.footer-col h3::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background-color: var(--c-secondary);
    border-radius: 2px;
}

/* Links */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
    color: #94a3b8;
    text-decoration: none;
    transition: all 0.2s;
    display: flex;
    align-items: center;
}

.footer-links a i {
    font-size: 0.8rem;
    margin-right: 0.5rem;
    color: var(--c-secondary);
    opacity: 0.7;
}

.footer-links a:hover {
    color: #fff;
    transform: translateX(5px);
}

.footer-links a:hover i {
    opacity: 1;
}

/* Contact */
.contact-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.25rem;
  align-items: flex-start;
}

.icon-box {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--c-secondary);
    flex-shrink: 0;
}

.contact-item:hover .icon-box {
    background-color: var(--c-secondary);
    color: #fff;
}

.label {
    display: block;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    color: #64748b;
    margin-bottom: 0.25rem;
}

.contact-item p {
    margin: 0;
    color: #e2e8f0;
    line-height: 1.4;
}

/* Social */
.social-links {
    display: flex;
    gap: 1rem;
}

.social-icon {
    width: 36px;
    height: 36px;
    background-color: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #fff;
    transition: all 0.3s;
}

.social-icon:hover {
    background-color: var(--c-primary);
    transform: translateY(-3px);
}

/* Bottom */
.footer-bottom {
  border-top: 1px solid #1e293b;
  padding: 1.5rem 0;
  font-size: 0.875rem;
  background-color: #020617;
}

.legal-links a {
    color: #64748b;
    transition: color 0.2s;
}

.legal-links a:hover {
    color: var(--c-secondary);
}

.separator {
    margin: 0 0.75rem;
    color: #334155;
}

.flex { display: flex; }
.justify-content-between { justify-content: space-between; }
.align-items-center { align-items: center; }
.mb-3 { margin-bottom: 1rem; }
.mr-2 { margin-right: 0.5rem; }
.mt-3 { margin-top: 1rem; }

@media (max-width: 900px) {
    .footer-content {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }
    
    .responsive-footer-bottom {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
}
</style>
