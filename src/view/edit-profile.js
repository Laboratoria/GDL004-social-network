export default () => {
    const viewEditProfile = `
  <h2 class="text-center">¡Bienvenido a nuestra página!
   HOLA SOY EL EDITPROFILE </h2>
  `;

    const divElemt = document.createElement('div');
    
    divElemt.innerHTML = viewEditProfile;
    return divElemt;
};