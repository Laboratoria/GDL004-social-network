export default () => {
    const notifications = `
     <div class='navigationBar' id="myNavBar">
         <!nav>
               <!--agregar logo de pagina web -->
           <!--input type="search" placeholder="search" id="search" class="sign-in" ></input-->
           <a href='#/Notifications'>Notifications</a>
           <a href='#/User'>User</a>
            <a href='#/Home'>Home</a>
          <!--a href="javascript:void(0);" class="icon" onclick="myNavBarFunction()"><i class="fa fa-bars"></i></a-->
         </nav>
     </div>
        <h1 class='text-center'>welcome to our page <br>
        notificaciones de usuario 
        </h1>
        `
    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = notifications  ;
    return divElemt;
};