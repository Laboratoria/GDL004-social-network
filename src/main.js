
//let email = document.getElementById("email_answer").Value
//let password = document.getElementById("paswword_answer")



import {changeView } from './view-controller/route.js'
const init = () => {
    changeView(window.location.hash)
    window.addEventListener('hashchange', () =>changeView (window.location.hash))
}

window.addEventListener('load', init)
