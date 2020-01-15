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
//LogIn with Facebook's accout
const logInWithFacebook = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  //template logeado observador de estado de autenticacion
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}
//LogIn with Twitter's account
const logInWithTwitter = () => {
  //LogIn with Twitter's account
  const logInWithTwitter = () => {
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      var token = result.credential.accessToken;
      var secret = result.credential.secret;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
}
const logInWithGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
const logInWithGithub = () => {
  var provider = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
