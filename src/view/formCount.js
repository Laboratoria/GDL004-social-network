import { createUser } from '../models/auth.js';
import {btnSignInUp} from './commonElements.js';

const signup = () => {
    const suname = document.getElementById('su_name').value
    const sulastname = document.getElementById('su_lastname').value
    const suemail = document.getElementById('su_email').value;
    const supassword = document.getElementById('su_password').value;
    if (suname === "" || sulastname === ""){
      errorSpan.innerHTML = "Your email is incorrect";
      document.getElementById("su_name").style.borderColor = "yellow";
      document.getElementById("su_lastname").style.borderColor = "yellow";
    }else if (suemail === "" || supassword === ""){
      errorSpan.innerHTML = "Your email is incorrect";
      document.getElementById("su_email").style.borderColor = "yellow";
      document.getElementById("su_password").style.borderColor = "yellow";
    }
    console.log(suemail + supassword)
    createUser(suemail, supassword)
}

function savingUsers(){
  const divSignUp = document.querySelector("#divsignup");
  const btnSignUp = document.querySelector('#btn_sign_up');
  btnSignUp.addEventListener('click', (e) =>{
  e.preventDefault();
  db.collection('users').add({
    userName: divSignUp.suname.value,
    userEmail:divSignUp.email.value
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
  console.log(divSingUp.name.value);
  });
}

//sing up
export default () => {
    //ionput para nombre
    const titleSignUp = document.createElement("h1");
    titleSignUp.innerHTML ="Sign Up"
    const inputsu_name = document.createElement("input");
    inputsu_name.innerHTML = "su_name";
    inputsu_name.setAttribute("placeholder", "First name")
    inputsu_name.setAttribute("id", "su_name");
    inputsu_name.setAttribute("class", "inputs");
    document.body.appendChild(inputsu_name);
    //input para apellido
    const inputsu_lastname = document.createElement("input");
    inputsu_lastname.innerHTML = "su_lastname";
    inputsu_lastname.setAttribute("placeholder", "Last name")
    inputsu_lastname.setAttribute("id", "su_lastname");
    inputsu_lastname.setAttribute("class", "inputs");
    document.body.appendChild(inputsu_lastname);
    //input para email
    const inputsu_email = document.createElement("input");
    inputsu_email.innerHTML = "su_email";
    inputsu_email.setAttribute("placeholder", "Email address");
    inputsu_email.setAttribute("id", "su_email");
    inputsu_email.setAttribute("type", "email");
    inputsu_email.setAttribute("class", "inputs");
    document.body.appendChild(inputsu_email);
    //input para contrase;a
    const inputsu_password = document.createElement("input");
    inputsu_password.innerHTML = "su_password";
    inputsu_password.setAttribute("placeholder", "Password")
    inputsu_password.setAttribute("type", "password");
    inputsu_password.setAttribute("id", "su_password");
    inputsu_password.setAttribute("class", "inputs");
    document.body.appendChild(inputsu_password);
    //boton para regristarse
    // const btn = document.createElement("BUTTON");
        // btn.innerHTML = "Sign up";
        // btn.onclick = signup;
        // btn.setAttribute('id', 'btn_sign_up');
        // btn.setAttribute('class', 'btn')
        // document.body.appendChild(btn);
        //div error
        const diverror = document.createElement("span")
        diverror.setAttribute("id", "formError")

    //div que lo contiene
    const divsignup = document.createElement("div");
    divsignup.setAttribute('id', 'divsignup');
    divsignup.setAttribute("class", "login_container");

    const container = document.createElement("section");
    divsignup.appendChild( titleSignUp);
    divsignup.appendChild(inputsu_name);
    divsignup.appendChild(inputsu_lastname);
    divsignup.appendChild(inputsu_email);
    divsignup.appendChild(inputsu_password);
    //divsignup.appendChild(btn);
    container.appendChild(divsignup)
    container.setAttribute("class", "container_grid_login");
    document.body.appendChild(container);
    //btnSignInUp();
    btnSignInUp.innerHTML = ""
    return container;
}
