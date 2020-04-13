function alertMessage(text){
  text = alert(text);
  console.log(text);
}

function displayError(text){
  console.log(text);
}

export const registerUser = (registerEmail, registerPassword) =>{
	console.log(registerEmail, password);
  firebase.auth().createUserWithEmailAndPassword(registerEmail, registerPassword)
  .then(function () {
    console.log(user);
    history.pushState("home.js", "home","#/Home");
    window.history.go();
  }).catch(displayError);
};

export const signIn = (emailAcces, passwordAcces) => {
  firebase.auth().signInWithEmailAndPassword(emailAcces, passwordAcces)
    .then(function () {
      const user = firebase.auth().currentUser;
      history.pushState("home.js", "home","#/Home");
      window.history.go();
    }).catch(displayError);
  };
  
export const signOut = () => {
  firebase.auth().signOut()
  .then(function() {
    alertMessage('User signed out!');
  }).catch(displayError);
};

export const isOrNotRegistered = () => {
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
     const displayName = user.displayName;
     const email = user.email;
     const emailVerified = user.emailVerified;
     const photoURL = user.photoURL;
     const isAnonymous = user.isAnonymous;
     const uid = user.uid;
     if(emailVerified ===false){
        alertMessage('Email not verified');
     }
     const providerData = user.providerData;
     document.getElementById('logInOrNot').innerHTML=`${user.email}`;
     console.log(user);
    } else {
      document.getElementById('logInOrNot').innerHTML='No Logueado';
  }
  });
}