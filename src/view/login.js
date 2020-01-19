export default () => {
    const viewLogin = `
    
    <div class="container_user">
        soy el login
         
     
</div>`;

    const divElemt = document.createElement('div');
    
    divElemt.innerHTML = viewLogin;
    return divElemt;
};