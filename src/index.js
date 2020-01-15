import { example } from './example.js';

// formula para los view
const init = () => {
    window.addEventListener("hashchange",() => console.log(window.location.hash))
    }
    window.addEventListener('load',init)

example();
