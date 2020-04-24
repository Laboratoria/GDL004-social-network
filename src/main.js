import { changeView } from './view-controler/routes.js';

import {initfb} from '../model/firebaseConfig.js'


const init = () => {
    initfb();
    changeView(window.location.hash);
    window.addEventListener('hashchange', () => changeView(window.location.hash));


};



window.addEventListener('load', init);


