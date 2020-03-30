import { components } from '../view/index.js'

export const changeView = (hash) => {
    const container = document.getElementById('container')
    container.innerHTML = "";


    switch(hash){
        case '#/Home':
            container.appendChild(components.home())
            break;
        case '#/Profile':
            container.appendChild(components.profile())
            break;
        }
    console.log(hash)
}


