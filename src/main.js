import { changeView } from '../view-controler/routes.js';

const init = () => {
    window.addEventListener('hashchange', () => changeView(window.location.hash))
}
window.addEventListener('load', init)


