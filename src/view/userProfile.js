export default () => {
    const userProfile = `
        <h2 class='text-center'>welcome to our page <br>
        aqui el usuario van crear post y podra editarlos, tambien cargaran todos los post que el creo
        </h2>
        `
        const elemntContainer = document.createElement('div')
        elemntContainer.innerHtml = viewHome;

        return elemntContainer;
};