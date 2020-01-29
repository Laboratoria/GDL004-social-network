import {navbar} from './commonElements.js';
import {headerMenu} from './commonElements.js';

export default () => {

  const divElem = document.createElement('div');
  divElem.setAttribute("id", "postList");
  divElem.setAttribute("class", "view_component");
 // container.body.appendChild(divElem);
 divElem.innerHTML ="Soy el HOME"
 document.innerHTML = headerMenu();

  document.innerHTML = navbar();


  return divElem;

};


//leer render post;
/*var user;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    function renderPost(doc){
      const postList = document.querySelector('#postList');
      let li = document.createElement("li");
      let title = document.createElement("span");
      let postMade= document.createElement("span");

      li.setAttribute("data-id", doc.id);
      title.textContent = doc.data().title;
      postMade.textContent = doc.data().post_area;

      li.appendChild(title);
      li.appendChild(postMade);

      postList.appendChild(li);


    }
  //este es el user snapshot
    const postVar =db.collection('Post').get().then((snapshot) =>{
      snapshot.docs.forEach(doc => {
        renderPost(doc);
      })
    })
  //hasta aqui trmina el snapshot
    //saving data

    const form = document.querySelector("#form_post");
    const btnForm = document.querySelector('#postBtn_enter');

    form.addEventListener('click', (e) =>{

      db.collection('Post').add({
        title: form.title.value,
        post_area:form.post_area.value
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });

    });
  }
 else {
      console.log("No hay nadie signed in")
      }
});*/
//console.log(postVar);
