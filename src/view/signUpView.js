import {signUpController, signInController, signOutController} from '../view-controler/signUpController.js';
//import { signOut } from '../model/signUpModel.js';


export const signUpView = () => {

const signUpView = `
      <div class="login-box">
        <h2>D  E  A  L</h2><br>
        <form>
            <!-- USERNAME INPUT -->
            <h1>Register</h1>
            <input type="email" placeholder="email" id="email" />
            <!-- PASSWORD INPUT -->
            <input type="password" placeholder="password" id="password"  />
            <input type="button" value="Sign Up" id="signUpBtn" >
            
            <input type="email" placeholder="email" id="emailSigIn" class="input"/>
            <input type="password" placeholder="password" id="passwordSigIn" >
            <input type="button" value="Sign In" id="signInBtn" >
        </form>
      </div>

    

              
              <button  id="signOut"> SignOut</button>
        `
const divElemt = document.createElement('div');
divElemt.innerHTML = signUpView;
return divElemt;
};

export const eventSignUpIn = () => {
  const registerEmail = document.getElementById("email");
	const registerPassword = document.getElementById("password");
  const signUpBtn = document.getElementById("signUpBtn");
  const emailAcces = document.getElementById("emailSigIn");
	const passwordAcces = document.getElementById("passwordSigIn");
	const signInBtn = document.getElementById("signInBtn");

//console.log(email, password);
  signUpBtn.addEventListener('click', () => {
    signUpController(registerEmail.value, registerPassword.value);
    console.log("hola signup");
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


 
