import { components, eventsElements } from '../view/index.js';


export const changeView = (hash) => {
    const container = document.getElementById('container')
    container.innerHTML = '';


    switch(hash){
        // agregar el login signup
        case '':
            container.appendChild(components.signUpView())
            eventsElements.signUpEvent();
        break;
        case '#/Home':
            container.appendChild(components.home())
            break;
        case '#/User':
            container.appendChild(components.user())
            break;
        case '#/Notifications':
            container.appendChild(components.notifications())
            break
    
        }    

    console.log(hash)
    return null
};


