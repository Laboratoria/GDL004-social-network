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
    console.log()
    location.hash = "#/Home";
    console.log("estas logeado " + email)

    //###### Agrega el user a la collection  #################
    db.collection("users").add({
      name: "Panchito",
      userEmail: email,
      photoURL : photoURL
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    //#####   Fin de agregar user a collection  ##############

  //###### esto se ejecuta cuando el user no esta logueado ######
  } else if(!user){
    location.hash = "#/Login";

    console.log("no estas logiueado"+ email)
  } else{
    location.hash = "#/FormCount";

    console.log("no estas logiueado"+ email)
  }

});
//########## hasta aqui termina el usuario de loguearse o desloguearse

//crear cuenta con tu email y password
function createUser(suemail, supassword) {
  firebase.auth().createUserWithEmailAndPassword(suemail, supassword).catch(function (error) {
    let errorCode = error.code;
    let errorMessage = error.message;

  });
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
function sing_socialNewtwork(provider) {
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
  console.log("salteee Prroo")
  firebase.auth().signOut()
  .then(function(){
      console.log("salte pa fuera")
    })
  .catch(function (error){
  console.log(error)
  });

}



export {
  autEmailPass,
  createUser,
  sing_socialNewtwork,
  signOutU
}
