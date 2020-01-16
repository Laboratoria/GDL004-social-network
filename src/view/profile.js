export default () => {
    const viewProfile = `
  <h2 class="text-center">¡Bienvenido a nuestra página!
   HOLA SOY EL PROFILE </h2>
  `;

    const divElemt = document.createElement('div');
    
    divElemt.innerHTML = viewProfile;
    return divElemt;
};