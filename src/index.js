import { example } from './example.js';

example();
let email = document.getElementById("email_answer").Value
let password = document.getElementById("paswword_answer")


const init = () => {
window.addEventListener("hashchange",() => console.log(window.location.hash))
}
window.addEventListener('load',init)