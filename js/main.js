class PortfolioApp {
  constructor() {
    this.currentLang = navigator.language.includes('id') ? 'id' : 'en';
    this.init();
  }
  async init() {
    await this.loadData();
    this.setupLanguage();
    this.setupNavScroll();
    console.log('✅ Portfolio loaded in ' + this.currentLang.toUpperCase());
  }
  async loadData() {
    try {
      const res = await fetch('data/profile.json');
      this.data = await res.json();
    } catch(e) { console.error('Data load failed:', e); }
  }
  setupLanguage() {
    document.documentElement.lang = this.currentLang;
    document.getElementById('langLabel').textContent = this.currentLang.toUpperCase();
    document.getElementById('langToggle').onclick = () => {
      this.currentLang = this.currentLang === 'id' ? 'en' : 'id';
      document.documentElement.lang = this.currentLang;
      document.getElementById('langLabel').textContent = this.currentLang.toUpperCase();
    };
  }
  setupNavScroll() {
    window.onscroll = () => document.getElementById('topNav').classList.toggle('scrolled', scrollY > 20);
  }
}
document.addEventListener('DOMContentLoaded', () => new PortfolioApp());
