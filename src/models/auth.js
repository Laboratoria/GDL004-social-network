function autEmailPass(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).then(result =>{
      history.pushState("home.js", "home", "#/Home");
     window.history.go();
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        //alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
     // console.log(error);
    });
}
//crear cuenta con tu email y password
function createUser(suemail, supassword) {
  firebase.auth().createUserWithEmailAndPassword(suemail, supassword)
  .catch(function (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    history.pushState("home.js", "home", "#/Home");
    window.history.go();
  });
}
//funcion entrar con
function sing_socialNewtwork(provider){
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
      let token = result.credential.accessToken;

    }
    let user = result.user;

   })
    .catch(function (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;

  });
}


export {
  autEmailPass,
  createUser,
  sing_socialNewtwork}
