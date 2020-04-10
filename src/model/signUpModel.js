function alertMessage(text){
  text = alert(text);
  console.log(text);
}
function displayError(text){
  console.log(text);
}


const isOrNotRegisteres = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
   const displayName = user.displayName;
   const email = user.email;
   const emailVerified = user.emailVerified;
   const photoURL = user.photoURL;
   const isAnonymous = user.isAnonymous;
   const uid = user.uid;
   const providerData = user.providerData;
   document.getElementById('logInOrNot').innerHTML=`${user.email} `;
   console.log(user);
  } else {
    document.getElementById('logInOrNot').innerHTML='No Logueado';
    }
  });
}

export const registerUser = (email, password) =>{
	console.log(email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function viewProfile() {
      alertMessage('New user created!');
    }).catch(displayError);
}

export const signIn = (emailAcces, passwordAcces) => {
  firebase.auth().signInWithEmailAndPassword(emailAcces, passwordAcces)
    .then(function viewHome() {
      alertMessage('User signed in!');
    }) .catch(displayError);
  }

export const signOut = () => {
  firebase.auth().signOut()
  .then(function() {
    alertMessage('User signed out!');
  }).catch(displayError);
}

	  
