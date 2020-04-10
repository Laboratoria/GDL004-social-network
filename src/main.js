import { changeView } from './view-controler/routes.js';

import {initfb} from '../model/firebaseConfig.js'

const init = () => {
    initfb();
    changeView(window.location.hash);
    window.addEventListener('hashchange', () => changeView(window.location.hash));
    

//const isOrNotRegisteres = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
       const displayName = user.displayName;
       const email = user.email;
       const emailVerified = user.emailVerified;
       const photoURL = user.photoURL;
       const isAnonymous = user.isAnonymous;
       const uid = user.uid;
       const providerData = user.providerData;
       document.getElementById('logInOrNot').innerHTML=`${user.email} `;
       console.log(user);
      } else {
        document.getElementById('logInOrNot').innerHTML='No Logueado';
    }
    });
 // }

};



window.addEventListener('load', init);


