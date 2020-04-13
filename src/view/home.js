

export default () => {
    const viewHome = `
    <div class='navigationBar' id="myNavBar">
        <!nav>
          <!--agregar logo de pagina web -->
          <input type="search" placeholder="search" id="search"></input>
          <a href='#/Notifications'>Notifications</a>
          <a href='#/User'>User</a>
          <a href='#/Home'>Home</a>
          
        </nav>
    </div>
        <h1 class='text-center'>welcome to our page <br>
        aqui van a cargar todos los post de los usuarios 
        </h1>
        `
    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewHome;
    return divElemt;
};
