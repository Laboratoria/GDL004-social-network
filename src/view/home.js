import {signOutController} from '../view-controler/signUpController.js';
import usersPost from './usersPost.js';

const dataFake = [
    {   
        id: 1,
        text: "Hola mundo",
        userCreated: "sil@gmail.com",
    },
    {
        id: 2,
        text: "Adios mundo",
        userCreated: "itza@gmail.com",
    }
]

export default () => {
    const viewHome = `
    <div class='navigationBar' id="myNavBar">
        <nav>
          <img src="images/nav-logo.jpg" id="logo-deal">
          <input type="search" placeholder="search" id="search"></input>
          <button  id="signOut"> SignOut</button>
          <a href='#/Notifications'>Notifications</a>
          <a href='#/User'>User</a>
          <a href='#/Home'>Home</a> 
        </nav>
    </div>
    <section id="containerPost">

    </section>`;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewHome;
    const containerPost = divElemt.querySelector("#containerPost");
    dataFake.forEach((item) => {
        console.log(item)
       containerPost.appendChild(usersPost(item));
    });
    console.log(containerPost);
    
    return divElemt;
};
  
/*export const usersPost = () => {

    const post = document.querySelector("#post");
    const tpl = document.querySelector('template');
    const tplInst = tpl.content.cloneNode(true);
    
    post.appendChild(tplInst);
    }*/

export const signOut = () => {
    const signOutBtn = document.getElementById("signOut");

    signOutBtn.addEventListener('click', () =>{
        signOutController();
      })

}


