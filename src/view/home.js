export default () => {
    const viewHome = `
        <h1 class='text-center'>welcome to our page <br>
        aqui van a cargar todos los post de los usuarios 
        </h1>
        `
    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewHome;
    return divElemt;
};