import {signUpController, signInController, signOutController} from '../view-controler/signUpController.js';
//import { signOut } from '../model/signUpModel.js';


export const signUpView = () => {

const signUpView = `
  <h1>DEAL</h1>
    <div id="formContainer" class="signInUpOut">
      <div id="header"></div>
        <input type="email" placeholder="email" id="email"/>
        <input type="password" placeholder="password" id="password"/>
        <button  id="signUpBtn"> Sign Up</button>
        <input type="email" placeholder="email" id="emailSigIn" />
        <input type="password"  placeholder="password" id="passwordSigIn" />
        <button  id="signInBtn"> Sign In</button>
        <button  id="signOut"> SignOut</button>
    </div>
`
const divElemt = document.createElement('div');
divElemt.innerHTML = signUpView;
return divElemt;
};

export const eventSignUpInOut = () => {
  const email = document.getElementById("email");
	const password = document.getElementById("password");
  const signUpBtn = document.getElementById("signUpBtn");
  const emailAcces = document.getElementById("emailSigIn");
	const passwordAcces = document.getElementById("passwordSigIn");
	const signInBtn = document.getElementById("signInBtn");

//console.log(email, password);
  signUpBtn.addEventListener('click', () => {
    signUpController(email.value, password.value);
    console.log("hola");
  })
  signInBtn.addEventListener('click', () => {
    signInController(emailAcces.value, passwordAcces.value);
    console.log("hola signIn");
  })
  signOut.addEventListener('click', () =>{
    signOutController();
    console.log('ya me sali');
  })
}

