function registrar(){
  let useremail=document.getElementById('useremail').value;
  let password=document.getElementById('password').value;
  alert("useremail"+useremail+"password"+password);
}

/*firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    console.log(email);
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymus = user.isAnonymus;
    var uid = user.uid;
    var provider = user.providerData;
    //document.getElementById('login').innerHTML="logueado"+
  }
})

/*function enviar(){
  var email = document.getElementById("useremail").value;
  var pass = document.getElementById("password").value;
}
var dbRef = firebase.database().ref('/users/' + uid);
/* import {autEmailPass} from './models/auth.js';
const formulario= document.getElementById('form-signIn');
const btnLogIn = document.getElementById('btn_sing_in');
const email = document.getElementById('email_answer');
const password = document.getElementById('password_answer');
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
}
 */
