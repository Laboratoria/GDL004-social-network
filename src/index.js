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
          first_page.classList.add("hide");
          spa.classList.remove('hide');
        }

  // Sign In

  singIn.addEventListener("click", () => {
    if(email === "" || password ===""){
        alert("Add your email or password");
      }else {
        firebase.auth().signInWithEmailAndPassword(email, password)
         .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
        first_page.classList.add("hide");
        spa.classList.remove('hide');
      }

  });

  /*  if(email === "" || password ==""){
      alert("Add your email or password");
    }*/
