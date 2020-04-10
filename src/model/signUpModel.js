


function alertMessage(text){
  text = alert(text);
  console.log(text);
}
function displayError(text){
  console.log(text);
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

	  
