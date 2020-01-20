import { components } from '../view/index.js';
import  login  from '../view/login.js';
const changeView = (route) => {
    const container = document.getElementById('container')
        container.innerHTML ="";
    const formCreate = document.getElementById('form-sign');
    //formCreate.innerHTML ='';
    login();
    switch (route ) {
        case "#/": 
             { return container.appendChild( components.login())}
        case "#/Home":
             { return container.appendChild( components.home())}
        case "#/Profile": { return container.appendChild( components.profile())}
        case "#/EditProfile": { return container.appendChild( components.editProfile())}

        
        default:
            break;
    }
    
    return null;
}

export {changeView}
