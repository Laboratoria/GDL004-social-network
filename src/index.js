// formula para los view
const init = () => {
  window.addEventListener("hashchange", () => console.log(window.location.hash))
}
window.addEventListener('load', init)
import { signInEmail, hey } from './models/auth.js';

//variables globales
let spa = document.querySelector('#spa');
let first_page = document.querySelector("#first_page");
export let email= document.querySelector("#email_answer");
export let password = document.querySelector("#paswword_answer");
//let email_new = document.querySelector("#new_email").value;
//slet password_new = document.querySelector("#new_password").value;
let singIn = document.querySelector("#btn_sing_in");
let hey_btn = document.querySelector("#btn_test");
let singInChrome = document.querySelector("#btn_sing_in_chrome");
let singInFB = document.querySelector("#btn_sing_in_fb");

// Sign In


const login =()=>{
  if (email.value !='' && password.value !=''){
    signInEmail(email.value, password.value);
  }
}
//document.querySelector('#btn_sing_in').addEventListener("click", login);
//document.querySelector('#btn_sing_in').addEventListener("click", hey);
//singIn.addEventListener("click", hey);
hey_btn.addEventListener("click", hey);
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


      function newAccount(){
          firebase.auth().createUserWithEmailAndPassword(emailNew, passwordNew)
          .catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;





    //signIn with fb
    singInFB.addEventListener("click", () => {
      let provider = new firebase.auth.FacebookAuthProvider();

  singIn.addEventListener("click", () => {
      let email = document.getElementById('email_answer').value;
      let password = document.getElementById('paswword_answer').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START authwithemail]
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');


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

       spa.classList.remove('hide');

      }
        else {
          alert(errorMessage);
        }
        console.log(error);
      document.getElementById('btn_sing_in').disabled = false;
        // [END_EXCLUDE]

      });
      // [END authwithemail]
      console.log('ya entre');

  document.getElementById('btn_sing_in').disabled = true;
  });

  /*  if(email === "" || password ==""){
      alert("Add your email or password");
    }*/

// Sing in to Google

singInChrome.addEventListener("click", ()=>{
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;

    }
    // The signed-in user info.
    var user = result.user;

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    //...
  })

});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    first_page.classList.add("hide");
    spa.classList.remove('hide');
    // User is signed in.
  } else {
    //falta que sucede si no esta nadi\e logueado
    // No user is signed in.
  }
});

