/*querySelector's de showSignUp*/
document.querySelector('.signUp').addEventListener('click', () => {
  console.log('Este boton tomara los valores de email y pasword para Firebase.');
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  createUser(email, password);
  console.log("El email y password son:" + email + password);
});
document.querySelector('.facebook').addEventListener('click', () => {
  console.log('Este boton le mostrara al user el pop-up de FB.');
  logInWithFacebook();
});
document.querySelector('.twitter').addEventListener('click', () => {
  console.log('Este boton le mostrara al user el pop-up de Twitter.');
  logInWithTwitter();
});
document.querySelector('.google').addEventListener('click', () => {
  console.log('Este boton le mostrara al user el pop-up de Google.');
  logInWithGoogle();
});
document.querySelector('.github').addEventListener('click', () => {
  console.log('Este boton le mostrara al user el pop-up de GitHub.');
  logInWithGithub();
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