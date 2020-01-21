
 function autEmailPass(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      console.log('ya entre');
      console.log(window.location.hostname);
      console.log(window.location.pathname);
      let nE= window.history.length;
      console.log(nE);
      //window.history.go(50);
     history.pushState("home.js", "home","#/Home");
     window.history.go();
    })
}

export {autEmailPass}