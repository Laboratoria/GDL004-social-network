import auth from "./auth.js";

var user;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    console.log(email);
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var uid = user.uid;
    var dbRef = firebase.database().ref('/users/' + uid);

      function writeUserData(displayName, email, photoURL) {
      dbRef.set({
        name: displayName,
        userEmail: email,
        photoUser : photoURL
      });
      console.log("se supone que ya agregue el dato")
    };    writeUserData(displayName, email, photoURL);    console.log(uid)
   //Referencia a la base de datos
    dbRef.once('value').then(function(snapshot) {         //Crea un snapshot
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    console.log(snapshot.val());
    // ...
    });  } else {
    // User is signed out.
    // ...
  }
});
