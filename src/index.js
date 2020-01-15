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

// App state.
const state = {
  "user": null
};


const pages = {
  "main": document.getElementById("main"),
  "login": document.getElementById("login")
};


//
// Login Page
//

// Get elements
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
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

//
// Main page
//

const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener("click", e => {
  firebase.auth().signOut().catch()
});

//
// Main logic
//

const togglePage = (name) => {
  Object.keys(pages).forEach((key) => pages[key].classList.toggle("hide", key !== name));
}

const showLoginPage = () => {
  togglePage("login");
}

const showMainPage = () => {
  togglePage("main");
}

firebase.auth().onAuthStateChanged(user => {
  state.user = user;
  if (user) {
    // Show main page.
    console.log("User logged in", user);
    showMainPage();
  } else {
    // Show login page.
    console.log("User not logged in");
    showLoginPage();
  }
});
