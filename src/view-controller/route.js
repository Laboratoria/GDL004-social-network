import { components } from '../view/index.js';
import  login  from '../view/login.js';
const changeView = (route) => {
    const container = document.getElementById('container')
        container.innerHTML ="";
   // const formCreate = document.getElementById('form-signIn');
   // formCreate.innerHTML ='';
   // login()

    switch (route ) {


        case "#/Home":
              container.appendChild( components.home())
        break;
        case "#/Profile": container.appendChild( components.profile())
        case "#/EditProfile": container.appendChild( components.editProfile())


        default:
            { return container.appendChild( components.login())}
    }

    return null;
}

export {changeView}
