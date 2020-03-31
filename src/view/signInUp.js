

export default (container, state) => {
  

  const signInSignUp = `
  <div class="login-wrap">
      <div class="login-html">
      <h1> DEAL </H1>
      <input id="tab-1" type="radio" name="tab" class="signin" checked><label for="tab-1" class="tab">Sign In</label>
      <input id="tab-2" type="radio" name="tab" class="signUp"><label for="tab-2" class="tab">Sign Up</label>
      <div class="login-form">
        <div class="sign-in-htm">
          <div class="group">
            <input type="email" name="email" placeholder="email" required/>
            <br>
            <input type="password" name="password" placeholder="password" required/>
            <br>
            <button  onclick="login()" class="button">Loguin to acount</button>
          </div>
        </div>
        <div class="sign-up-htm">
        <div class="group">
          <input id="user" placeholder="USERNAME" class="input">
          <br>
          <input id="signUpPass" placeholder="PASSWORD" class="input" data-type="password">
          <br>
          <input id="signUpPass" placeholder=" REPEAT PASSWORD" class="input" data-type="password">
          <br>
          <input id="signUpPass" placeholder=" EMAIL ADDRESS" class="input">
          <br>
          <a href="#/home"><input type="submit" class="button" value="Sign Up"></a>
        </div>
      </div>
    </div>
    </div>
</div-->     
`
const divElemt = document.createElement('div');
divElemt.innerHTML = signInSignUp;
return divElemt;
/*container.appendChild(divElemt);


const signInModal =document.getElementById("tab-1").value;
const signUpModal =document.getElementById("tab-2").value;
const email = document.getElementById("userEmail").value;
const password = document.getElementById("userPassword").value;

window.console.log(usersEmails+ " " + usersPassword);*/
};