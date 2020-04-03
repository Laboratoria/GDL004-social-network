import initfb from './model/firebaseConfig.js'
import { components } from '../view/index.js'

console.log('llegue signUp.js')
let email;
let password;

function registerUser(){

	const email = document.getElementById("email");
	const password = document.getElementById("password");
	const signUpBtn = document.getElementById("signUpBtn");
	const signInBtn = document.getElementById("signInBtn");
	const signOutBtn = document.getElementById("signOutBtn");
	
		email = email.value;
		password = password.value;
		
		
		auth.createUserWithEmailAndPassword(email, password);
 } 
	  function loginUser() {
		email = email.value;
		password = password.value;
	
		auth.signInWithEmailAndPassword(email, password);
	  }
	  function logoutUser() {
//falta implementar la funcion de logout

	  }
	
	  auth.onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
		 console.log('logged in');
		} 
		else {
		 console.log('not logged in')
		}
	  });
	signInBtn.addEventListener('click', ignIn)
	signUpBtn.addEventListener('click', signUp)
	signOuttn.addEventListener('click', signOut)

