
export default (container, state) => {
    const viewLogin = `
    <div class="login-wrap">
      <div class="login-html">
      <h1> DEAL </H1>
      <input id="tab-1" type="radio" name="tab" class="signin" checked><label for="tab-1" class="tab">Sign In</label>
      <input id="tab-2" type="radio" name="tab" class="signUp"><label for="tab-2" class="tab">Sign Up</label>
      <div class="login-form">
        <div class="sign-in-htm">
          <div class="group">
            <input type="email" placeholder="EMAIL..." id="userEmail" class="input">
            <br>
            <input type="password" placeholder="PASSWORD"id="userPassword" class="input" data-type="password">
            <br>
            <input id="check" type="checkbox" class="check" checked>
            <label for="check"><span class="icon"></span> Keep me Signed in</label>
            <br>
            <input type="submit" class="button" value="Sign In">
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
  </div>`
  
  const sectionElem = document.createElement('section');
    sectionElem.innerHTML += viewLogin 
    container.appendChild(sectionElem) 
