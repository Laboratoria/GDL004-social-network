import { spaComponents } from '.view/index.js'

const changeView = (routes) => {
    const container = document.getElementById('container')
    container.innerHTML = '';

    switch(routes){
        case'#/':
           container.appendChild(spaComponents.home())
        case'#/': 
            { return container.appendChild(spaComponents.userProfile())}
        default:
            break;
    }
    console.log(routes)
}

export {changeView}
