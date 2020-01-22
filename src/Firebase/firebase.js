//Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCAKpeMPvIIBodURusnhjYZAAUMMcJHI50",
  authDomain: "social-network-d16b8.firebaseapp.com",
  databaseURL: "https://social-network-d16b8.firebaseio.com",
  projectId: "social-network-d16b8",
  storageBucket: "social-network-d16b8.appspot.com",
  messagingSenderId: "115141179708",
  appId: "1:115141179708:web:38af736dfb2182aee9c639",
  measurementId: "G-KDD7DYQ2J4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const createUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(user) {
    console.log('Usuario Creado');
  })
  .catch(function(error) {
    console.error(error);
  });
}

const logInUserFirebase = (email, password) => {
firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(user) {
    console.log('Usuario Logeado');
  })
  .catch(function(error) {
    console.error(error);
  });
}
// LogIn with another social network's account
const providerFacebook = new firebase.auth.FacebookAuthProvider();
const providerTwitter = new firebase.auth.TwitterAuthProvider();
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerGitHub = new firebase.auth.GithubAuthProvider();

const logInWithProvider = (provider) => {
  switch (provider) {
    case 1: firebase.auth().signInWithPopup(providerFacebook); break;
    case 2: firebase.auth().signInWithPopup(providerTwitter); break;
    case 3: firebase.auth().signInWithPopup(providerGoogle); break;
    case 4: firebase.auth().signInWithPopup(providerGitHub); break;
  }
};
/* const token = result.credential.accessToken;
const user = result.user;
}).catch(function (error) {
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  const credential = error.credential;
  // ...
}); */
