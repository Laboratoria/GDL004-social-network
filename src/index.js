// formula para los view
const init = () => {
  window.addEventListener("hashchange", () => console.log(window.location.hash))
}
window.addEventListener('load', init)

//variables globales
let spa = document.querySelector('#spa');
let first_page = document.querySelector("#first_page");
let email= document.querySelector("#email_answer");
let password = document.querySelector("#paswword_answer");
//let email_new = document.querySelector("#new_email").value;
//slet password_new = document.querySelector("#new_password").value;
let singIn = document.querySelector("#btn_sing_in");
let hey_btn = document.querySelector("#btn_test");
let singInChrome = document.querySelector("#btn_sing_in_chrome");
let singInFB = document.querySelector("#btn_sing_in_fb");

// Sign In

import {autEmailPass} from './models/auth.js';
export const login =()=>{
 // signInEmail(email.value, password.value);  
const email = document.querySelector("#email_answer").value;
const password = document.querySelector("#password_answer").value;

autEmailPass(email, password);
console.log('ya entre');
debugger
//console.log("hey");
}

/*

export const login =()=>{
  
   // signInEmail(email.value, password.value);  
 console.log("hey");
 const email = document.querySelector("#email_answer").value;
 const password = document.querySelector("#password_answer").value;
 console.log(email,password);
 const auth = new Autenticacion()
 auth.crearCuentaconEmailPass(email, password);
 console.log("hey");
}



//document.querySelector('#btn_sing_in').addEventListener("click", hey);
//singIn.addEventListener("click", hey);
//hey_btn.addEventListener("click", hey);
//alert(signIn)
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