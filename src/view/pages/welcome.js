export default  () => {
    const template = `
        <nav>
            <i id="spa" class="material-icons">spa</i>
            <span id="appName">soundscape</span>
        </nav>
        <header>
          <h1>Just put on your headphones</h1>
          <h2>& close your eyes."</h2>
        </header>
        <section>
          <span>Goes far beyond simple entertainment, for managing stress and anxiety, insomnia and stress.<br> Our recordings are also a fantastic tool for enhancing focus and concentration, stimulating the imagination, fueling creativity, and eliminating distractions.</span>
        </section>
            <aside>
                <button id="LogIn"> LogIn</button><br>
                <button id="SignUpEmail">SignUp with E-mail</button><br>
                <span>Or Sign Up With:</span><br>
            </aside>
            <div id="buttons">
                <img id="fbLogIn" src="https://bit.ly/3aJAlp4" width="50px" height="50px">
                <img id="twitterLogIn" src="https://bit.ly/38Di5f8" width="50px" height="50px">
                <img id="googleLogIn" src="https://bit.ly/2Gj87TX" width="50px" height="50px">
                <img id="githubLogIn" src="https://bit.ly/2TWaBzt" width="50px" height="50px">
            </div>
            <footer>
                <span id="nameFooter">APP 2020 <img id="mexicoflag" src="https://bit.ly/36q0CFr"></span>
            </footer>
    `;
    const welcomeView = document.createElement('div');
    welcomeView.classList.add('welcomeView');
    welcomeView.innerHTML = template;
    return welcomeView;
  }