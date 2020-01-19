/*querySelector's de showSignUp*/
 document.querySelector('.signUpFirebase').addEventListener('click', () => {
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;
   createUser(email, password);
 });
 
 const signUpButtons = document.querySelectorAll('.signUp');
 signUpButtons.forEach(button => {
   button.addEventListener('click', (event) => {
     let x = event.target.id;
     switch (x) {
       case 'facebook': logInWithProvider(1); break;
       case 'twitter' : logInWithProvider(2); break;
       case 'google' : logInWithProvider(3); break;
       case 'github' : logInWithProvider(4); break;
     }
   });
 });

document.querySelector('.back').addEventListener('click', () => {
  //funcion que te regrese a home.
});
/* Template dinamico de signUp
export const showSignUp = () => {
      let container = document.querySelector('.container');
      container.innerHTML = '';
      const template = `
      <center>
      <nav class="signUP">
      <p>Regístrate con tu correo.</p>
      Email:<br>
      <input id="email" type="email" class="email"/><br>
      Password:<br>
      <input id="password" type="password" class="password"/><br>
      <button class="signUp">Sign Up</button>
      <p>or</p>
      <button class="facebook">signUp with Facebook</button>
      <button class="twitter">signUp with Twitter</button>
      <button class="google">signUp with Google</button>
      <button class="github">signUp with GitHub</button>
      </nav>
    </center>
    `
    container.innerHTML = template;

  }
*/
