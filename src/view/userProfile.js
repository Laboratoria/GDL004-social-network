export default (hash, state) => {

      
    const viewProfile = `
        <h2 class='text-center'>welcome to our page <br>
        aqui el usuario van crear post y podra editarlos, tambien cargaran todos los post que el creo
        </h2>
        `
        const divElemt = document.createElement('div');
        divElemt.classList.add('position')
        divElemt.innerHTML = viewProfile;
        return divElemt;
};
