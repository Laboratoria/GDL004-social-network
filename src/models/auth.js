
<<<<<<< HEAD
function autEmailPass(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      console.log('ya entre');
      console.log(firebase.auth().currentUser)
      console.log(window.location.hostname);
      console.log(window.location.pathname);
      let nE= window.history.length;
      console.log(nE);
      //window.history.go(50);
     history.pushState("home.js", "home","#/Home");
=======
 function autEmailPass(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).then(result =>{
      history.pushState("home.js", "home","#/Home");
>>>>>>> 352a892e25fafb9b49947f36ba08cc910e36a8b3
     window.history.go();
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
     
      // [END_EXCLUDE]
    });
}
//crear cuenta con tu email y password
function createUser(suemail, supassword) {
  firebase.auth().createUserWithEmailAndPassword(suemail, supassword).catch(function (error) {
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


<<<<<<< HEAD
function createUser(suemail, supassword){
  firebase.auth().createUserWithEmailAndPassword(suemail, supassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("yalo creeaste")
    history.pushState("home.js", "home","#/Home");
     window.history.go();
    // ...
  });
}
export {autEmailPass,createUser}
=======
>>>>>>> 352a892e25fafb9b49947f36ba08cc910e36a8b3
