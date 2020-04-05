import signUpController from '../view-controler/signUpController.js';

export const signUpView = () => {

const signUpView = `
  <h1>DEAL</h1>
    <div id="formContainer" class="signInUpOut">
      <div id="header"></div>
        <input type="email" placeholder="email" id="email"/>
        <input type="password" placeholder="password" id="password"/>
        <button  id="signUpBtn"> Sign Up</button>
        <button  id="signInBtn"> Sign In</button>
        <button  id="signOut"> Sign Out</button>
    </div>
`
const divElemt = document.createElement('div');
divElemt.innerHTML = signUpView;
return divElemt;
};

export const eventSignUp = () => {
  const email = document.getElementById("email");
	const password = document.getElementById("password");
	const signUpBtn = document.getElementById("signUpBtn");
	const signInBtn = document.getElementById("signInBtn");
	const signOutBtn = document.getElementById("signOutBtn");
console.log(email, password);
  signUpBtn.addEventListener('click', () => {
    signUpController(email.value, password.value);
    console.log("hola");
    
  })


}
