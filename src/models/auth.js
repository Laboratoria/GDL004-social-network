// singIn
import {email, password} from '../index.js';

export  function signInEmail(email, password ){ 
    console.log(email, password);
    
    console.log(email, password);
    if (email.length < 4) {
    alert('Please enter an email address.');
    return;
}
if (password.length < 4) {
    alert('Please enter a password.');
    return;
}


firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    first_page.classList.add("hide");
        spa.classList.remove('hide');
});

  
/*
.catch(function (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');

    } else if (errorCode !== 'auth/wrong-password') {
        first_page.classList.add("hide");
        spa.classList.remove('hide');

    } else {
        alert(errorMessage);
    }
    document.getElementById('btn_sing_in').disabled = false;
});
document.getElementById('btn_sing_in').disabled = true;
*/
}

export function hey(){
    alert("aqyi");
}

//LogOut

export function logOutFun(){
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
    }).catch(function (error) {
      // An error happened.
    });
}