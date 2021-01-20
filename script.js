

let sort = document.querySelector('.container__inputSort');
let move = document.querySelector('.container__movebuttone');
let input = document.querySelector('.input');
let remove = document.querySelector('.container_deleteNote');
let addField = document.querySelector('.container__cross');
let field = document.querySelector('.container__inputField');

addField.addEventListener(('click'), () => {
    let newElem = input.cloneNode(true);
    field.append(newElem); 
    
    let xLogo = newElem.lastChild.previousSibling;    
    xLogo.addEventListener(('click'), () => { 
        newElem.remove();
    })
})
  





    




