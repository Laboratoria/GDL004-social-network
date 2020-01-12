window.onload = () => {
  document.querySelector("#register").addEventListener("click", () =>{
    let email = document.getElementsByClassName("email").value;
    let password = document.getElementsByClassName("password").value;
    console.log(email); 
    //createUser(email,password);
  });
  document.querySelector("#login").addEventListener("click", () =>{
    let email = document.getElementsByClassName("email").value;
    let password = document.getElementsByClassName("password").value;
    loginUser(email, password);    
  });
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDRfqwpr395TTzT8Q6Ka34tOlTAy0uYY1c",
        authDomain: "socialnetwork-6b5ea.firebaseapp.com",
        databaseURL: "https://socialnetwork-6b5ea.firebaseio.com",
        projectId: "socialnetwork-6b5ea",
        storageBucket: "socialnetwork-6b5ea.appspot.com",
        messagingSenderId: "704073197683",
        appId: "1:704073197683:web:26b13804d6833cc9fd6206",
        measurementId: "G-EHBG4EXVTQ"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    
      const createUser = (email,password) => {
        console.log('Creando el usuario con email ' + email);
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (user) {
          console.log('¡Creamos al usuario!');
        })
        .catch(function (error) {
          console.error(error)
        });
      }
      
      const loginUser = (email,password) => {
        console.log('Loging user ' + email);
    
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (user) { 
          console.log('Credenciales correctas, ¡bienvenido!');
        })
        .catch(function (error) {
          console.log(error);
        });
      }
}