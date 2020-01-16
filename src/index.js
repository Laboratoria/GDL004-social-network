import {
  example
} from './example.js';

// formula para los view

example();
//modales de login
// formula para los view
const init = () => {
  window.addEventListener("hashchange", () => console.log(window.location.hash))
}
window.addEventListener('load', init)

//variables globales
let spa = document.getElementById('spa');
let first_page = document.getElementById("first_page");
let email = document.getElementById("email_answer").value;
let password = document.getElementById("paswword_answer").value;
let emailNew = document.getElementById("new_email").value;
let passwordNew = document.getElementById("new_password").value;
let singIn = document.getElementById("btn_sing_in");
let singInChrome = document.getElementById("btn_sing_in_chrome");

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

// Sign In

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
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');

    } else if (errorCode !== 'auth/wrong-password') {
      first_page.classList.add("hide");
      spa.classList.remove('hide');

    } else {
      alert(errorMessage);
    }
    console.log(error);
    document.getElementById('btn_sing_in').disabled = false;
    // [END_EXCLUDE]
  });
  // [END authwithemail]
  document.getElementById('btn_sing_in').disabled = true;
});

/*  if(email === "" || password ==""){
    alert("Add your email or password");
  }*/

// Sing in to Google

singInChrome.addEventListener("click", () => {
  let provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;

    }
    // The signed-in user info.
    let user = result.user;

  }).catch(function (error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    //...
  })

});

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    first_page.classList.add("hide");
    spa.classList.remove('hide');
    // User is signed in.
  } else {
    //falta que sucede si no esta nadi\e logueado
    // No user is signed in.
  }
});