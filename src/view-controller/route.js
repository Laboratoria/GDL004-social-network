import { components } from '../view/index.js';
const changeView = (route) => {
    const container = document.getElementById('container')
        container.innerHTML ="";
    switch (route ) {
        case "/": 
             { return container.appendChild( components.login())}
        case "#/Home":
             { return container.appendChild( components.home())}
        case "#/Profile": { return container.appendChild( components.profile())}
        case "#/EditProfile": { return container.appendChild( components.editProfile())}

        
        default:
            break;
    }
    console.log(route)
}

export {changeView}
