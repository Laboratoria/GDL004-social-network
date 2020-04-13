export default () => {

      
    const viewProfile = `
    <div class='navigationBar' id="myNavBar">
        <!nav>
          <!--agregar logo de pagina web -->
          <!--input type="search" placeholder="search" id="search"></input-->
          <a href='#/Notifications'>Notifications</a>
          <a href='#/User'>User</a>
          <a href='#/Home'>Home</a>
          <!--a href="javascript:void(0);" class="icon" onclick="myNavBarFunction()"><i class="fa fa-bars"></i></a-->
        </nav>
    </div>
        <h2 class='text-center'>welcome to our page <br>
        aqui el usuario van crear post y podra editarlos, tambien cargaran todos los post que el creo
        </h2>
        `
        const divElemt = document.createElement('div');
        divElemt.classList.add('position')
        divElemt.innerHTML = viewProfile;
        return divElemt;
};
