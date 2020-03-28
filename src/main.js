const init = () => {
    window.addEventListener('hashchange', () => console.log(window.location.hash))
}
window.addEventListener('load', init)


