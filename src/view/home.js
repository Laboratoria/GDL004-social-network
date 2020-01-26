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

const postVar =db.collection('Post').get().then((snapshot) =>{
  snapshot.docs.forEach(doc => {
    renderPost(doc);
  })
})
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


console.log(postVar);

//user y realtime database
/*var user;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var uid = user.uid;

    var dbRef = firebase.database().ref('/users/' + uid);

    function writeUserData(displayName, email, photoURL) {
      dbRef.set({
        name: displayName,
        userEmail: email,
        photoUser : photoURL
      });
      console.log("se supone que ya agregue el dato")
    };

    writeUserData(displayName, email, photoURL);

    console.log(uid)
   //Referencia a la base de datos
    dbRef.once('value').then(function(snapshot) {         //Crea un snapshot
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    console.log(snapshot.val());
    // ...
    });

  } else {
    // User is signed out.
    // ...
  }
});

/*var userId = firebase.auth().currentUser.uid;
 firebase.database.ref('/users/' + userId).once('value').then(function(snapshot) {
  var name = (snapshot.val() && snapshot.val().name) || 'Anonymous';
  console.log(name)
});*/
