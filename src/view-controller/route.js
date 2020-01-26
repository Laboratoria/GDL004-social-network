import { components } from '../view/index.js';
//import  {login } from '../view/login.js';
const changeView = (route) => {
    const container = document.getElementById('container')
        container.innerHTML ="";
   // const formCreate = document.getElementById('form-signIn');
   // formCreate.innerHTML ='';
   // login()
    switch (route ) {
<<<<<<< HEAD
        case "#/FormCount":
            container.appendChild(components.formCount())
            break;
=======
       
        case "#/FormCount":
            container.appendChild(components.formCount())
            break;    
>>>>>>> 352a892e25fafb9b49947f36ba08cc910e36a8b3
        case "#/Home":
              container.appendChild(components.home())
        break;
        case "#/Profile": container.appendChild( components.profile())
        break;
        case "#/EditProfile": container.appendChild( components.editProfile())
        break;
<<<<<<< HEAD
=======

        
>>>>>>> 352a892e25fafb9b49947f36ba08cc910e36a8b3
        default:
            { return container.appendChild( components.login())}
    }
    return null;
}
export {changeView}
