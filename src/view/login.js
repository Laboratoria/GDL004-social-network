import { hey } from "../models/auth.js";
export default () => {
    const inputEmail = document.createElement("INPUT");
inputEmail.innerHTML = "email";
inputEmail.setAttribute("placeholder", "email");
inputEmail.setAttribute("id", "email_answer");
document.body.appendChild(inputEmail);

const inputPassword= document.createElement("INPUT");
inputPassword.innerHTML = "password";
inputPassword.setAttribute("placeholder", "password");
inputPassword.setAttribute("id", "password_answer");
document.body.appendChild(inputPassword);

const btn = document.createElement("BUTTON");   // Create a <button> element
btn.innerHTML = "Log In";                   // Insert text
btn.setAttribute('id', 'btn_sing_in');
//btn.setAttribute("onclick", "hey()")
document.body.appendChild(btn);   
    const viewLogin = `
    
    
     `;


    const divElemt = document.createElement('div');
    divElemt.innerHTML = viewLogin;
    return divElemt;

   
};



