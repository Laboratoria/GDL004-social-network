export default () => {
    const viewHome = `
  <h2 class="text-center">¡Bienvenido a nuestra página!
   HOLA SOY EL HOME </h2>
  `;

    const divElemt = document.createElement('div');
    
    divElemt.innerHTML = viewHome;
    return divElemt;
};