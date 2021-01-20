
let sort = document.querySelector('.container__inputSort');
let move = document.querySelector('.container__movebuttone');
let input = document.querySelector('.input');
let remove = document.querySelector('.container__deleteNote');
let addField = document.querySelector('.container__cross');
let field = document.querySelector('.container__inputField');
let dragElem;

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
        dragElem = event.target;
    });    
    field.addEventListener('dragend', (event) => { 
        event.target.style.backgroundColor = 'unset';
        dragElem = null;   
    });
});


field.addEventListener(`dragenter`, (event) => {
    event.target.style['border-bottom'] = 'solid 3px blueviolet';
    event.preventDefault();
  });
  field.addEventListener(`dragover`, (event) => {
    event.preventDefault();
  });

  field.addEventListener(`dragleave`, (event) => {
    event.target.style.backgroundColor = 'unset';
    event.target.style['border-bottom'] = '';
});

field.addEventListener('drop',(event) => {
    event.target.style['border-bottom'] = '';
    field.insertBefore(dragElem, event.target.parentElement);
});