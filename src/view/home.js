export default () => {
    const viewHome = `
    <div class='container'>
        <h2> ¡Soy el home </h2>
        <figure> <img src="/" alt="home"> </figure>
        
    </div>`
    

    const divElem = document.createElement('div')
    divElem.innerHTML = viewHome;

    return divElem;
}
