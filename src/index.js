//import { example } from './example.js';
window.onload = () => {
  // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCAKpeMPvIIBodURusnhjYZAAUMMcJHI50",
      authDomain: "social-network-d16b8.firebaseapp.com",
      databaseURL: "https://social-network-d16b8.firebaseio.com",
      projectId: "social-network-d16b8",
      storageBucket: "social-network-d16b8.appspot.com",
      messagingSenderId: "115141179708",
      appId: "1:115141179708:web:38af736dfb2182aee9c639",
      measurementId: "G-KDD7DYQ2J4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  
  document.querySelector('.register').addEventListener('click', () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  createUser(email, password);
  //console.log('Email:' + email + 'Password:' + password);
  });
  document.querySelector('.login').addEventListener('click', () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  console.log('Email:' + email + 'Password:' + password);
  logInUser(email, password);
  });
  document.querySelector('.facebook').addEventListener('click', () => {
  logInWithFacebook();
  });
  
  const createUser = (email, password) => {
    console.log("Creando Usuario");
    console.log("el email es:" + email + password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(user) {
      console.log('Usuario Creado');
    })
    .catch(function(error) {
      console.error(error);
    });
  }
  
  const logInUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user) {
      console.log('Usuario Logeado');
    })
    .catch(function(error) {
      console.error(error);
    });
  }
  //LogIn with Facebook's accout
  const logInWithFacebook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    //template logeado observador de estado de autenticacion
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  }
  //LogIn with Twitter's account
  const logInWithTwitter = () => {
  
  }
  }