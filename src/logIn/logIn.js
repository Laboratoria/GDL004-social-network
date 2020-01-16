/*querySelector's de showLogIn*/
document.querySelector('.logIn').addEventListener('click', () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  logInUserFirebase(email, password);
});
document.querySelector('.back').addEventListener('click', () => {
  //funcion que te regrese a home.
});

/* Template Dinamica de LogIn
export const showLogIn = () => {
   let container = document.querySelector('.container');
   container.innerHTML = '';
   const template = `
   Email:<br>
   <input id="email" type="email" class="email"/><br>
   Password:<br>
   <input id="password" type="password" class="password"/><br>
   <button class="logIn">Log In</button>
   `
   container.innerHTML = template;
 }
 */
