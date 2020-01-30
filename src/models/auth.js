//quien esta logeado
//##########  esto se ejecuta cuando el usuario se loguea o desloguea  #####
firebase.auth().onAuthStateChanged(function(user) {
  //########## cuando el usuario esta logueado se ejecuta  #######
  if (user) {
    // User is signed in.
    var name = user.displayName;
    var email = user.email;
    //var emailVerified = user.emailVerified
    var photoURL = user.photoURL;
    var uid = user.uid;
    var providerData = user.providerData;
    location.hash = "#/Home";
    //###### Agrega el user a la collection  #################
   db.collection("users").add({
      userName: name,
      userEmail: email,
      photoURL : photoURL
    })
    .then(function(docRef) {
        //console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    //#####   Fin de agregar user a collection  ##############

  //###### esto se ejecuta cuando el user no esta logueado ######
  } else if(!user){
    location.hash = "#/Login";
  } else{
    location.hash = "#/FormCount";
  }
});
//########## hasta aqui termina el usuario de loguearse o desloguearse

//crear cuenta con tu email y password
function createUser(suemail, supassword, suname, sulastname) {
  console.log("recibiendo prross" ,suname, sulastname)
  firebase.auth().createUserWithEmailAndPassword(suemail, supassword)
  .then( function(){
  })
    .catch(function (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
  })
}

function autEmailPass(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).then(result => {
      history.pushState("home.js", "home", "#/Home");
      window.history.go();
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        errorSpan.innerHTML = "Your email is incorrect";
        //alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      //console.log(error);

    });
}

//funcion entrar con
function sign_socialNewtwork(provider) {
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

function signOutU(){
  firebase.auth().signOut()
  .then(function(){
    })
  .catch(function (error){
  //console.log(error)
  });
}

export {
  autEmailPass,
  createUser,
  sign_socialNewtwork,
  signOutU
}
