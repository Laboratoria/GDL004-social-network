//import model (firebase, firestore)
import { components, view } from '../view/index.js';

export const controller = {
  init: () => {
    view.init();
  },

  changeTemplates: (hash) => {
    const mainView = document.querySelector('#container');
    mainView.innerHTML = '';

    switch (hash) {
      case '':
      case '#':
      case '#/':
          return mainView.appendChild(components.welcome());
      case '#/home':
          mainView.appendChild(components.home());
          controller.init();
          break;
    }
  }
}