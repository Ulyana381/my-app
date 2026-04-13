import { getMainContainer } from '../../core/uiContainer.js';
import { getData, saveData } from '../../core/dataService.js';

export function renderTasksUI() {
    const container = getMainContainer();
    const data = getData();
    const habits = [
        { id: 1, name: '💧 Вода', points: 1 },
        { id: 2, name: '😴 Сон', points: 1 },
        { id: 3, name: '🚶 Прогулка', points: 2 }
    ];
    const today = new Date().toISOString().slice(0,10);
    const todayTasks = data.tasks[today] || {};

    container.innerHTML = `
        <h2>Задачи на сегодня</h2>
        <div id="habits-list"></div>
        <div>Баллов: <span id="points">0</span></div>
    `;

    const list = document.getElementById('habits-list');
    let points = 0;

    habits.forEach(habit => {
        const completed = todayTasks[habit.id];
        if (completed) points += habit.points;
        const div = document.createElement('div');
        div.style.cssText = 'display:flex;justify-content:space-between;padding:8px;border-bottom:1px solid #ccc';
        div.innerHTML = `
            <span>${habit.name} +${habit.points}</span>
            <button style="background:${completed ? '#4caf50' : '#ccc'};color:white;border:none;padding:4px 16px;border-radius:8px">
                ${completed ? '✓' : 'Выполнить'}
            </button>
        `;
        div.querySelector('button').onclick = () => {
            if (completed) return;
            if (!data.tasks[today]) data.tasks[today] = {};
            data.tasks[today][habit.id] = true;
            saveData(data);
            renderTasksUI();
        };
        list.appendChild(div);
    });

    document.getElementById('points').textContent = points;
}