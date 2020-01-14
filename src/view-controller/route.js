
import { components } from '../view/index.js';

export const changeView = (hash) => {
    ;
    const sectionMain = document.getElementById('container');
    sectionMain.innerHTML="";
    
    switch (hash) {
       
        case '#/Home':
            { return sectionMain.appendChild(components.home()); }
        case '#/Profile':
                { return sectionMain.appendChild(components.profile()); }
        case '#/EditProfile':
                { return sectionMain.appendChild(components.editProfile()); }
        
        default:
            break;
           
    }
    console.log(hash);
};
