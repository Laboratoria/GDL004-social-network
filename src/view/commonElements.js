let enabled = false;
const btnSignInUp = () => {
    enabled = true;
    const btnSignIn = document.createElement("BUTTON");
    btnSignIn.innerHTML = "Log In";
    btnSignIn.setAttribute('id', 'btn_sign_in');
    btnSignIn.setAttribute('class', 'btn_primary active');
    btnSignIn.onclick = logInForm;
    //document.body.appendChild(btnSignIn);
    const btnSignUp = document.createElement("BUTTON");
    btnSignUp.innerHTML = "Sign Up";
    btnSignUp.setAttribute('id', 'btn_sign_up');
    btnSignUp.setAttribute('class', 'btn_primary ');
    btnSignUp.onclick = signUpForm;
    //document.body.appendChild(btnSignUp);
    const containerBtn = document.createElement("div");
    containerBtn.setAttribute('id', 'form-signIn');
    containerBtn.setAttribute("class", "btn_container");
    btnSignUp.innerHTML=""
    containerBtn.appendChild(btnSignIn);
    containerBtn.appendChild(btnSignUp);

    document.body.appendChild( containerBtn);

    return btnSignInUp;
}
const navbar = () => {
    const navbarMenu = document.createElement("div");
    navbarMenu.setAttribute('class', 'navbar_bottom bottom');
    document.body.appendChild(navbarMenu);
    const listNavbarBottom = document.createElement("ul");
    listNavbarBottom.setAttribute("class", "navbar_bottom_list");
    document.body.appendChild(listNavbarBottom);
    const liNavHome = document.createElement("li");
    document.body.appendChild(liNavHome);
    const liNavHomeSpan = document.createElement("span");
    liNavHomeSpan.setAttribute("class", "flaticon-012-house" );
    const liNavHomeA = document.createElement("a");
    liNavHomeA.setAttribute("href", "#/Home");
    liNavHomeA.innerHTML = "Home";
    liNavHomeSpan.appendChild(liNavHomeA);
    liNavHome.appendChild(liNavHomeSpan);
    const liNavSearch = document.createElement("li");
    document.body.appendChild(liNavSearch);
    const liNavSearchA = document.createElement("a");
    liNavSearchA.setAttribute("href", "");
    liNavSearchA.innerHTML = "Search";
    const liNavSearchSpan = document.createElement("span");
    liNavSearchSpan.setAttribute("class", "flaticon-036-zoom" )
    liNavSearch.appendChild(liNavSearchSpan);
    liNavSearch.appendChild(liNavSearchA);
    const liNavPost = document.createElement("li");
    document.body.appendChild(liNavPost);
    const liNavPostA = document.createElement("button");
    liNavPostA.setAttribute("class", "btn_post");
    liNavPostA.setAttribute("id", "postBtn");
    liNavPostA.innerHTML = "Post";
    liNavPostA.onclick = showModal;
    const liNavPostSpan = document.createElement("span");
    liNavPostSpan.setAttribute("class", "flaticon-045-add" )
    liNavPost.appendChild(liNavPostSpan);
    liNavPost.appendChild(liNavPostA);
    listNavbarBottom.appendChild(liNavHome);
    listNavbarBottom.appendChild(liNavSearch);
    listNavbarBottom.appendChild(liNavPost);
    navbarMenu.innerHTML = ""
    navbarMenu.appendChild(listNavbarBottom);
    return navbarMenu;
  }
const headerMenu = () => {
    const headerNav = document.createElement("header");
    headerNav.setAttribute('class', 'header_nav top');
    document.body.appendChild(headerNav);
    const listNav = document.createElement("ul"
    listNav.setAttribute("class", "header_nav_list");
    document.body.appendChild(listNav);
    const liHeaderNavUser = document.createElement("li");
    liHeaderNavUser.setAttribute("class", "header_nav-page")
    document.body.appendChild(liHeaderNavUser);
    const liHeaderNavUserSpan = document.createElement("span");
    liHeaderNavUserSpan.setAttribute("class", "flaticon-009-next " )
    const liHeaderNavUsera = document.createElement("a");
    liHeaderNavUsera.setAttribute("href", "#/Profile");
    liHeaderNavUsera.innerHTML = "Profile";
    liHeaderNavUser.appendChild(liHeaderNavUsera);
    liHeaderNavUser.appendChild(liHeaderNavUserSpan);
    const liHeaderNavUser2 = document.createElement("li");
    liHeaderNavUser2.setAttribute("class", "header_nav-user")
    document.body.appendChild(liHeaderNavUser2);
    const liHeaderNavUsera2 = document.createElement("a");
    liHeaderNavUsera2.setAttribute("href", "#/EditProfile");
    liHeaderNavUsera2.setAttribute("class", "info");
    liHeaderNavUsera2.innerHTML = "User";
    const liHeaderNavUserSpan2 = document.createElement("span");
    liHeaderNavUserSpan2.setAttribute("class", "avatar");
    //liHeaderNavUserSpan2.onclick= showAvatarUSer;
    liHeaderNavUserSpan2.setAttribute("class", "flaticon-051-user" )
    liHeaderNavUser2.appendChild(liHeaderNavUserSpan2);
    liHeaderNavUser2.appendChild(liHeaderNavUsera2);
    listNav.appendChild(liHeaderNavUser);
    listNav.appendChild(liHeaderNavUser2);
    headerNav.appendChild(listNav);
    return headerMenu;
}

function signUpForm() {
    const btnSignIn = document.getElementById("btn_sign_in");
    btnSignIn.classList.toggle("active");
    location.hash = "#/FormCount";
    //history.pushState("formCount.js", "formCount", "#/FormCount");
    //window.history.go();
    const btnSignUpForm = document.getElementById("btn_sign_up");
    btnSignUpForm.classList.toggle("active");
  }

  function logInForm() {
    const btnSignUp = document.getElementById("btn_sign_up");
    const btnSignIn = document.getElementById("btn_sign_in");
    btnSignIn.classList.toggle("active");
    btnSignUp.classList.toggle("active");
    location.hash = "#/Loguin";
    //history.pushState("login.js", "login", "#/Login");
    //window.history.go();
  }

  function showModal() {
    const modal = document.getElementById("postModal");
    const btn = document.getElementById("postBtn");
    const span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function () {
      modal.style.display = "none";
    }
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  export { btnSignInUp, navbar, headerMenu, enabled }
