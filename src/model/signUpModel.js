import { changeView } from "../view-controler/routes.js";

function alertMessage(text){
  text = alert(text);
  console.log(text);
}

function displayError(text){
  return(text);
}

export const registerUser = (email, password) =>{
  //console.log(registerEmail, registerPassword);
 return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then( (res) =>{
    console.log(res)
    changeView('#/User')
    window.location.hash = '#/User'
  } 
    //alertMessage('welcoome');
  ).catch(displayError('inserte usuario o contrasena'));
}

export const signIn = (email, password) => {
  
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then( (res) =>{
    console.log(res + " ya entraste")
    changeView('#/Home')
    window.location.hash = '#/Home'
    }).catch(displayError);
  };
  
export const observer = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('existe usuario activo')
        changeView();
        // User is signed in.
       const displayName = user.displayName;
       const email = user.email;
       const emailVerified = user.emailVerified;
       const photoURL = user.photoURL;
       const isAnonymous = user.isAnonymous;
       const uid = user.uid;
       console.log(uid);
       console.log(email);
       console.log( displayName);
      }else {
        console.log('no existe usuario activo')
        // User is signed out.
        // ...
      }
    });
  }

export const signOut = () => {
  firebase.auth().signOut()
  .then( (res) =>{
    console.log(res + '  saliendo...')
    changeView('')
    //window.location.hash = ''
    }).catch(displayError);
  };
  
