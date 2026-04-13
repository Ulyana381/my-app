import { initUI } from './core/uiContainer.js';
import { initRouter } from './core/router.js';

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/serviceWorker.js')
            .then(reg => console.log('SW registered:', reg))
            .catch(err => console.error('SW error:', err));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initUI();
    initRouter();
    registerServiceWorker();
});