export default () => {
    const viewHome = `
    <div class='container'>
        <h2> ¡Soy el home </h2>
        <figure> <img src="/" alt="home"> </figure>
        <div class='' id="spa">
        <header class="header_nav">
          <ul class="header_nav_list">
            <li class="header_nav-page"> <a href="#/Profile"> Profile </a><span class="flaticon-009-next "></span> </span>
            </li>
            <li class="header_nav-user"> <span class="flaticon-051-user"><a href="#/EditProfile"> User</a> </span> </li>
          </ul>
        </header>
        <main class="main_container">
          <section id="container">

          </section>
        </main>
        <nav class="navbar_bottom">
          <ul class="navbar_bottom_list">
            <li> <span class="flaticon-012-house"> <a href="#/Home"> Home</a> </span></li>
            <li> <span class="flaticon-036-zoom"> Search</span> </li>
            <li> <span class="flaticon-045-add"> Post</span> </li>
            <li> <button id=log-out type="submit"> <a href="">SALIRRRRR </button> </li>
          </ul>
        </nav>
      </div>


    </div>`

    const divElem = document.createElement('div')
    divElem.innerHTML = viewHome;

    return divElem;
}
var user;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
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
    };

    writeUserData(displayName, email, photoURL);

    console.log(uid)
   //Referencia a la base de datos
    dbRef.once('value').then(function(snapshot) {         //Crea un snapshot
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    console.log(snapshot.val());
    // ...
    });

  } else {
    // User is signed out.
    // ...
  }
});

/*var userId = firebase.auth().currentUser.uid;
 firebase.database.ref('/users/' + userId).once('value').then(function(snapshot) {
  var name = (snapshot.val() && snapshot.val().name) || 'Anonymous';
  console.log(name)
});*/
