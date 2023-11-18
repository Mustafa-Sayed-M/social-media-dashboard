// # Constants:
const app = document.querySelector('.app');
const btnChangeTheme = document.querySelector('.btn-change-theme');

// # Dependent variable
let currentMode = 'light-mode';

function toggleMode() {
    moveIcon();
    updateCurrentMode();
    sendCurrentModeToLocalStorage();
    changeMode();
}

// # to move icon when work mode
function moveIcon() {
    btnChangeTheme.classList.toggle('active-mode');
}

// # to change mode when user click on btn change mode
function changeMode() {
    app.classList.remove('dark-mode', 'light-mode');
    app.classList.add(currentMode);
    btnChangeTheme.classList.toggle('active-mode', currentMode === 'dark-mode');
}

// # to update current mode
function updateCurrentMode() {
    currentMode = (currentMode === 'light-mode') ? 'dark-mode' : 'light-mode';
}

// # send to local storage for save current mode
function sendCurrentModeToLocalStorage() {
    window.localStorage.setItem('mode', currentMode);
}

// # get current mode from local storage
function getCurrentModeFromLocalStorage() {
    currentMode = window.localStorage.getItem('mode') || 'light-mode';
    changeMode();
}

// # trigger to function when page load
window.onload = getCurrentModeFromLocalStorage();