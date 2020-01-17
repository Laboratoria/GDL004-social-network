// formula para los view
const init = () => {
  window.addEventListener("hashchange", () => console.log(window.location.hash))
}
window.addEventListener('load', init)
import { 
  signInEmail, hey
} from './models/auth.js';

//variables globales
let spa = document.querySelector('#spa');
let first_page = document.querySelector("#first_page");
export let email= document.querySelector("#email_answer");
export let password = document.querySelector("#paswword_answer");
let email_new = document.querySelector("#new_email").value;
let password_new = document.querySelector("#new_password").value;
let singIn = document.querySelector("#btn_sing_in");
let singInChrome = document.querySelector("#btn_sing_in_chrome");
let singInFB = document.querySelector("#btn_sing_in_fb");

const login =()=>{
  if (email.value !='' && password.value !=''){
    signInEmail(email.value, password.value);
  }
}
// Sign In

singIn.addEventListener("click", login);

/*
//Crear cuenta
function newAccount() {
  firebase.auth().createUserWithEmailAndPassword(emailNew, passwordNew)
    .catch(function (error) {

      let errorCode = error.code;
      let errorMessage = error.message;
    });
  first_page.classList.add("hide");
  spa.classList.remove('hide');
}
//LogOut
document.getElementById("log-out").addEventListener("click", () => {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
  });
});



    //signIn with fb
    singInFB.addEventListener("click", () => {
      let provider = new firebase.auth.FacebookAuthProvider();

      firebase.auth().signInWithPopup(provider);
      firebase.auth().getRedirectResult().then(function (result) {
        if (result.credential) {
          let token = result.credential.accessToken;
        }
        let user = result.user;

      }).catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
      })

    });

    // Sing in to Google
    singInChrome.addEventListener("click", () => {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
      firebase.auth().getRedirectResult().then(function (result) {
        if (result.credential) {
          let token = result.credential.accessToken;
        }
        let user = result.user;
      }).catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
      })

    });
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        first_page.classList.add("hide");
        spa.classList.remove('hide');
        console.log(user.email)
      } else {
        //si no esta logeado que lo mande a la pag de login
        first_page.classList.remove("hide");
        spa.classList.add('hide');
      }
    });
    */