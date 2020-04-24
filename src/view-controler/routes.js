import { components } from '../view/index.js';


export const changeView = (hash) => {
    const container = document.getElementById('container')
    container.innerHTML = '';


    switch(hash){
        case '':
            container.appendChild(components.signUpView())
        break;
        case '#/Home':
            container.appendChild(components.home())
           // container.appendChild(components.postContainer())
            //eventsElements.usersPost();
           // eventsElements.signOut();
            break;
        case '#/User':
            container.appendChild(components.user())
           //// eventsElements.signOut();
            break;
        case '#/Notifications':
            container.appendChild(components.notifications())
            break
    
        }    

    //console.log(hash)
    return null
};


