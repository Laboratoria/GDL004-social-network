import { components } from '../view/index.js'

export const changeView = (hash) => {
    const container = document.getElementById('container')
    container.innerHTML = ""


    switch(hash){
        // /user
          //lo que entra como hash es la variable que llega por medio de parametros 
        case '#/Home':
            container.appendChild(components.home())
            break;
        case '#/User':
            container.appendChild(components.user())
            break;
        case '#/Notifications':
            container.appendChild(components.profile())
            break
        }
        

    console.log(hash)
    return null
}


