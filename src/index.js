import { example } from './example.js';

//modales de login
// formula para los view
const init = () => {
window.addEventListener("hashchange",() => console.log(window.location.hash))
}
window.addEventListener('load',init)

//variables globales
let spa = document.getElementById('spa');
let first_page= document.getElementById("first_page");
let email = document.getElementById("email_answer").value;
let password = document.getElementById("paswword_answer").value;
let emailNew = document.getElementById("new_email").value;
let passwordNew = document.getElementById("new_password").value;
let singIn = document.getElementById("btn_sing_in");


//Crear cuenta
      function newAccount(){
          firebase.auth().createUserWithEmailAndPassword(emailNew, passwordNew)
          .catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;

          });
       //   first_page.classList.add("hide");
         // spa.classList.remove('hide');
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
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        }else  {
          alert(errorMessage);
        }
        console.log(error);
        document.getElementById('btn_sing_in').disabled = false;
        // [END_EXCLUDE]
      });
      if (firebase.auth().currentUser) {
        
        first_page.classList.add("hide");
        spa.classList.remove('hide');
        console.log('ya entre');
        
      }
     
      
      // [END authwithemail]      
   document.getElementById('btn_sing_in').disabled = true;
  });

 
