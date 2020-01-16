/*querySelector's de showSignUp*/
 document.querySelector('.signUp').addEventListener('click', () => {
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;
   createUser(email, password);
 });
 document.querySelector('.facebook').addEventListener('click', () => {
   logInWithFacebook();
});
document.querySelector('.twitter').addEventListener('click', () => {
  logInWithTwitter();
});
document.querySelector('.google').addEventListener('click', () => {
  logInWithGoogle();
});
document.querySelector('.github').addEventListener('click', () => {
  logInWithGithub();
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
