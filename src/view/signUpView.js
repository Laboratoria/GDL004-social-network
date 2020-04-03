//import {logIn} from '../controller/signUp.js';

export default (container, state) => {

  const signUpView = `
  <h1>DEAL</h1>
    <div id="formContainer" class="signInUpOut">
      <div id="header"></div>
        <input type="email" placeholder="email" id="email"/>
        <input type="password" placeholder="password" id="password"/>
        <button  id="signUp"> Sign Up</button>
        <button  id="signIn"> Sign In</button>
        <button  id="signOut"> Sign Out</button>
    </div>
`
const divElemt = document.createElement('div');
divElemt.innerHTML = signUpView;
return divElemt;
};


