export default () => {

      
    const viewProfile = `
    <div class='navigationBar' id="myNavBar">
    <!nav>
      <!--agregar logo de pagina web -->
      <input type="button" value="Sign Out" id="signOut" >
      <input type="search" placeholder="search" id="search"></input>
      <a href='#/Notifications'>Notifications</a>
      <a href='#/User'>User</a>
      <a href='#/Home'>Home</a> 
    </nav>
    </div>  
    
        `
        const divElemt = document.createElement('div');
        divElemt.classList.add('position')
        divElemt.innerHTML = viewProfile;
        return divElemt;
};
