import {signUpController, signInController} from '../view-controler/signUpController.js';

export const signUpView = () => {

  const signUpView = `
        <div class="login-box">
          <h2>D  E  A  L</h2><br>
          <h4>CREATING CONNECTIONS</h4></br></br>
          <form>
              <!-- USERNAME INPUT -->
              <h1>Register</h1>
              <input type="email" name="email" placeholder="email" id="email" required="required" />
              <input type="password" name="password" placeholder="password" id="password" required="required" />
              <input type="button" value="Sign In" id="signInBtn" >
              <input type="button" value="Sign Up" id="signUpBtn" >
          </form>
        </div>
          `
  const divElemt = document.createElement('div');
  divElemt.innerHTML = signUpView;

  divElemt.querySelector('#signInBtn').addEventListener('click', () => {

    const form = divElemt.querySelector('form');
    signInController(form.email.value, form.password.value); 
  })

  divElemt.querySelector('#signUpBtn').addEventListener('click', () => {
    const form = divElemt.querySelector('form');
    signUpController(form.email.value, form.password.value);
  })

  return divElemt;
}
