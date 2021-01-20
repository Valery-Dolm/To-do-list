

let sort = document.querySelector('.container__inputSort');
let move = document.querySelector('.container__movebuttone');
let input = document.querySelector('.input');
let remove = document.querySelector('.container__deleteNote');
let addField = document.querySelector('.container__cross');
let field = document.querySelector('.container__inputField');

addField.addEventListener(('click'), () => {
    let newElem = input.cloneNode(true);
    field.append(newElem); 
    
    let xLogo = newElem.lastChild.previousSibling;    
    xLogo.addEventListener(('click'), () => { 
        newElem.remove();
    })
});
  
remove.addEventListener('click', () => {
    input.remove();
});


/*Drag&Drops определеяем перетаскиваемые элементы*/
let items = document.querySelectorAll('.input');

items.forEach((input) => {
    field.addEventListener('dragstart', (event) => {
        event.target.style.backgroundColor = 'red';
    });    
    field.addEventListener('dragend', (event) => {
        event.target.style.backgroundColor = 'unset';    
    });
});



items.addEventListener(`dragenter`, (evt) => {
    
  })
  
  items.addEventListener(`dragleave`, (evt) => {
    
  });

  field.addEventListener(`dragover`, (evt) => {
    evt.preventDefault();