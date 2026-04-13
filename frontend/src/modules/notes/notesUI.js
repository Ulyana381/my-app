import { getMainContainer } from '../../core/uiContainer.js';

export function renderNotesUI() {
    const container = getMainContainer();
    container.innerHTML = `<h2>Заметки</h2><p>Скоро будет...</p>`;
}