export default () => {
    const viewEditProfile = `<h2> ¡Soy el Edit-Profile </h2>
    <figure> <img src="/" alt="Edit-profile"> </figure>`

    const divElem = document.createElement('div')
    divElem.innerHTML = viewEditProfile;

    return divElem;
}