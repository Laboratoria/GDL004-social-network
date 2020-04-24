export default ({text, userCreated, id}) => {
  
  const templatePost = `<div class="">
    <p>${text}</p>
    <p>${userCreated}, ${id}</p
    <button id="editPost">Editar</button>
    <button id="delete">Eliminar</button>
  </div>
  `

  const divElemt = document.createElement('div');
  divElemt.classList.add('position')
  divElemt.innerHTML = templatePost;
  
  return divElemt;

};

{/* <textarea rows="10" cols="40">Post...</textarea> */}


//Aqui se insertaran los nuevos elementos
/*export default usersPost = () => {

const post = document.querySelector("#post");
const tpl = document.querySelector('template');
const tplInst = tpl.content.cloneNode(true);

post.appendChild(tplInst);
}*/