import { getMainContainer } from '../../core/uiContainer.js';

export function renderTrackerUI() {
    const container = getMainContainer();
    container.innerHTML = `<h2>Прогресс</h2><p>Скоро будет...</p>`;
}