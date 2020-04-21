import { changeView } from './view-controler/routes.js';

import {initfb} from '../model/firebaseConfig.js'

import {isOrNotRegistered} from '../model/signUpModel.js'

const init = () => {
    initfb();
    isOrNotRegistered();
    changeView(window.location.hash);
    window.addEventListener('hashchange', () => changeView(window.location.hash));


};



window.addEventListener('load', init);


