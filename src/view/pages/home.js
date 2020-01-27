export default  () => {
    const template = `
      <homeHeader>
      <i id="back" class='material-icons'>keyboard_backspace</i>
      </homeHeader>
      <homeSection>
      </homeSection>
      <homeNav>
        <img id="dashboard" alt="dashboard" src="../assets/home.png"/>
        <img id="post" alt="post" src="../assets/post.png"/>
        <img id="profile" alt="profile" src="../assets/profile.png"/>
      </homeNav>
    `;
    const homeView = document.createElement('div');
    homeView.classList.add('homeView');
    homeView.innerHTML = template;
    return homeView;
  }