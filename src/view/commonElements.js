function singUpForm () {
  history.pushState("formCount.js", "formCount", "#/FormCount");
    window.history.go();
}
function logInForm () {
  history.pushState("login.js", "login", "#/Login");
    window.history.go();
}
const btnSingInUp = () => {
<<<<<<< HEAD
    const btnSingIn = document.createElement("BUTTON");
    btnSingIn.innerHTML = "Log In";
=======
    
    const btnSingIn = document.createElement("BUTTON");   
    btnSingIn.innerHTML = "Log In";
                      
>>>>>>> 352a892e25fafb9b49947f36ba08cc910e36a8b3
    //btnSingIn.onclick = login;
    btnSingIn.setAttribute('id', 'btn_sing_in');
    btnSingIn.setAttribute('class', 'btn_primary active');
    btnSingIn.onclick = logInForm;
<<<<<<< HEAD
    document.body.appendChild(btnSingIn);
    const btnSingUp = document.createElement("BUTTON");
    btnSingUp.innerHTML = "Sing Up";
    btnSingUp.onclick = singUpForm;
   // btnSingUp.onclick = login;
    btnSingUp.setAttribute('id', 'btn_sing_in');
    btnSingUp.setAttribute('class', 'btn_primary active');
    document.body.appendChild(btnSingUp);
    const containerBtn = document.createElement("div");
    containerBtn.setAttribute('id', 'form-signIn');// creamos el formulario
    containerBtn.setAttribute("class", "btn_container")
    containerBtn.appendChild(btnSingIn);
    containerBtn.appendChild(btnSingUp);
=======
    document.body.appendChild(btnSingIn);   

    const btnSingUp = document.createElement("BUTTON");   
    btnSingUp.innerHTML = "Sing Up"; 
    btnSingUp.onclick = singUpForm;                  
   // btnSingUp.onclick = login;
    btnSingUp.setAttribute('id', 'btn_sing_in');
    btnSingUp.setAttribute('class', 'btn_primary active');
    document.body.appendChild(btnSingUp);   

    const containerBtn = document.createElement("div");
    containerBtn.setAttribute('id', 'form-signIn');// creamos el formulario
    containerBtn.setAttribute("class", "btn_container")
    
    containerBtn.appendChild(btnSingIn);
    containerBtn.appendChild(btnSingUp);
    
>>>>>>> 352a892e25fafb9b49947f36ba08cc910e36a8b3
    document.body.appendChild( containerBtn);
    return btnSingInUp;
}
const navbar = () =>{
<<<<<<< HEAD
  const navbarMenu = document.createElement("Navbar");
  headerNav.setAttribute('class', 'navbar_bottom');
  document.body.appendChild(navbarMenu);
    const listNavbarBottom = document.createElement("ul");
    listNavbarBottom.setAttribute("class", "navbar_bottom_list");
    document.body.appendChild(listNavbarBottom);
      const liNavHome = document.createElement("li");
      liNavHome.setAttribute("class", "header_nav-page");
      document.body.appendChild(liNavHome);
       const liNavHomeSpan = document.createElement("span");
       liNavHomeSpan.setAttribute("class", "flaticon-012-house" );
       document.appendChild(liNavHomeSpan);
        const liNavHomeA = document.createElement("a");
        liNavHomeA.setAttribute("href", "#/Home");
        liNavHomeA.innerHTML = "Home";
        document.appendChild(liNavHomeA);
        liNavHomeSpan.appendChild(liNavHomeA);
        liNavHome.body.appendChild(liNavHomeSpan);
      const liHeaderNavUser2 = document.createElement("li");
      liHeaderNavUser2.setAttribute("class", "header_nav-user")
      document.body.appendChild(liHeaderNavUser2);
        const liHeaderNavUsera2 = document.createElement("a");
        liHeaderNavUsera2.setAttribute("href", "#/EditProfile");
        liHeaderNavUsera2.innerHTML = "User";
        const liHeaderNavUserSpan2 = document.createElement("span");
        liHeaderNavUserSpan2.setAttribute("class", "flaticon-051-user" )
        liHeaderNavUser2.appendChild(liHeaderNavUserSpan2);
        liHeaderNavUser2.appendChild(liHeaderNavUsera2);
      listNav.appendChild(liHeaderNavUser);
      listNav.appendChild(liHeaderNavUser2);
      headerNav.appendChild(listNav);
}
const headerMenu = () => {
  const headerNav = document.createElement("header");
  headerNav.setAttribute('class', 'header_nav');
  document.body.appendChild(headerNav);
    const listNav = document.createElement("ul");
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
        liHeaderNavUsera2.innerHTML = "User";
        const liHeaderNavUserSpan2 = document.createElement("span");
        liHeaderNavUserSpan2.setAttribute("class", "flaticon-051-user" )
        liHeaderNavUser2.appendChild(liHeaderNavUserSpan2);
        liHeaderNavUser2.appendChild(liHeaderNavUsera2);
      listNav.appendChild(liHeaderNavUser);
      listNav.appendChild(liHeaderNavUser2);
      headerNav.appendChild(listNav);
}
export {btnSingInUp, navbar, headerMenu}
=======
    
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
            const liNavPostA = document.createElement("a");
            liNavPostA.setAttribute("href", "");
            liNavPostA.innerHTML = "Post";
            const liNavPostSpan = document.createElement("span");
            liNavPostSpan.setAttribute("class", "flaticon-045-add" )
            liNavPost.appendChild(liNavPostSpan);
            liNavPost.appendChild(liNavPostA);

        
          listNavbarBottom.appendChild(liNavHome);
          listNavbarBottom.appendChild(liNavSearch);
          listNavbarBottom.appendChild(liNavPost);
        navbarMenu.appendChild(listNavbarBottom);
        
      

  }
  const headerMenu = () => {
    const headerNav = document.createElement("header");
    headerNav.setAttribute('class', 'header_nav top');
    document.body.appendChild(headerNav);

      const listNav = document.createElement("ul");
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
          liHeaderNavUsera2.innerHTML = "User";
          const liHeaderNavUserSpan2 = document.createElement("span");
          liHeaderNavUserSpan2.setAttribute("class", "flaticon-051-user" )
          liHeaderNavUser2.appendChild(liHeaderNavUserSpan2);
          liHeaderNavUser2.appendChild(liHeaderNavUsera2);

        
        listNav.appendChild(liHeaderNavUser);
        listNav.appendChild(liHeaderNavUser2);
        headerNav.appendChild(listNav);



}

export {btnSingInUp, navbar, headerMenu}
>>>>>>> 352a892e25fafb9b49947f36ba08cc910e36a8b3
