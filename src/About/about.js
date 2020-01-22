/*querySelector's de showAbout*/
document.querySelector('.back').addEventListener('click', () => {
    console.log('Regresa a la pagina /Home.');
    //funcion que te regrese a home.
  });
  /* Template dinamico de About
  export const showAbout = () => {
      let container = document.querySelector('.container');
      container.innerHTML = '';
      const template = `
      <section>
        <h1> About</h1>
        <p> Here goes a few information about our App. </p>
        <p class="aboutEmoji"><i class="material-icons">spa</i></p>
        <button class="back"><i class="material-icons">first_page</i></button>
      </section>
      `
      container.innerHTML = template;
    }
  */