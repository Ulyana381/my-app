import { navigate } from './router.js';

export function initUI() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <header style="background:#4a90e2;color:white;padding:16px;display:flex;justify-content:space-between">
            <h1>Моё приложение</h1>
        </header>
        <main id="main-content" style="padding:16px"></main>
        <nav style="position:fixed;bottom:0;width:100%;background:white;display:flex;border-top:1px solid #ccc">
            <button data-path="/tasks" style="flex:1;padding:12px">✅ Задачи</button>
            <button data-path="/notes" style="flex:1;padding:12px">📝 Заметки</button>
            <button data-path="/tracker" style="flex:1;padding:12px">📊 Прогресс</button>
        </nav>
    `;
    document.querySelectorAll('[data-path]').forEach(btn => {
        btn.onclick = () => navigate(btn.dataset.path);
    });
}

export function getMainContainer() {
    return document.getElementById('main-content');
}