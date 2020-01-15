import { getMaxListeners } from "cluster";

// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEAtw5wa3Auz7MzsBI1eS0oX-md1RE9yA",
  authDomain: "social-network-eedc8.firebaseapp.com",
  databaseURL: "https://social-network-eedc8.firebaseio.com",
  projectId: "social-network-eedc8",
  storageBucket: "social-network-eedc8.appspot.com",
  messagingSenderId: "378714099666",
  appId: "1:378714099666:web:56769efd615e9c6926820b",
  measurementId: "G-CJK45C4SQ1"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get elements
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");
const googleSignIn = document.getElementById("googleSignIn");
const faceSignIn = document.getElementById("faceSignIn");

// add login event
btnLogin.addEventListener("click", e => {
  // get email and pass
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  // sing in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // Show main page.
    console.log(user);
    btnLogout.classList.remove("hide");
  } else {
    // Show login page.
    console.log("not logged in");
    btnLogout.classList.add("hide");
  }
});

// var ref = new firebase("http:\\social-network-eedc8/");
// var user = {
  // email:lujannavarro26@getMaxListeners.com,
  // password: 123456,
 //};
 //ref.createUser(user, function(error){
  // if(error){
    // console.log(error, code);
  // } else {
    //() console.log("tu usuario se ha registrado");
   //}

// });

 ref.authWithPassword(user);

const initApp = (
btnLogin.addEventListener("click", () => {
  document.getElementById("pageLoginEmail").classList.toggle("hide");
  document.getElementById("pageLoginEmail").style.display = "none";
  document.getElementById("pageLoginSocial").style.display = "block";
})

// login with Google
googleSignIn.addEventListener("click", () => {
  const baseProvider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(baseProvider)
    .then((result) => {
      console.log(result);
      console.log("Success Google linked");
    })
    .catch((err) => console.log(err));
});

// login with Facebook
faceSignIn.addEventListener("click", () => {
  const baseProviderFace = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(baseProviderFace)
    .then((result) => {
      console.log(result);
      console.log("Success Facebook linked");
    })
    .catch((err) => {
      console.log(err);
    });
});
