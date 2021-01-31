
let sort = document.querySelector('.container__inputSort');
let move = document.querySelector('.container__movebuttone');
let input = document.querySelector('.input');
let remove = document.querySelector('.container__deleteNote');
let addField = document.querySelector('.container__cross');
let field = document.querySelector('.container__inputField');
let dragElem;
let sortSign;

addField.addEventListener(('click'), () => {
    let newElem = input.cloneNode(true);
    newElem.children[1].value = '';//тут пошли изменения
    field.append(newElem);     
    let xLogo = newElem.querySelector('.container__deleteNote');    
    xLogo.addEventListener(('click'), () => { 
        newElem.remove();
    })
    draggable(newElem);
});  
remove.addEventListener('click', () => {
    input.remove();
});
// function draggable(item) {
//     item.children[0].addEventListener('mousedown', event => {
//         item.draggable = true;
//     })
// }
sort.addEventListener('click', () => {    
    let arrayInput = document.querySelectorAll('.input');
    let newArray = [...arrayInput];
    if(sortSign != 'down') {
        sort.innerHTML = `<svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="12" width="2.5" height="12.5" transform="rotate(-180 3 13)"/>
        <rect x="10" y="3.75" width="2.5" height="7.5" transform="rotate(-90 10 3.75)"/>
        <rect x="10" y="8.75" width="2.5" height="10" transform="rotate(-90 10 8.75)"/>
        <rect x="10" y="13.75" width="2.5" height="15" transform="rotate(-90 10 13.75)"/>
        <path d="M3.75 6.55671e-07L6.99759 4.6875L0.502404 4.6875L3.75 6.55671e-07Z"/>
        </svg>`;
        newArray.sort((note1, note2) => {
            let a = note1.querySelector('.text').value;
            let b = note2.querySelector('.text').value;
            if(a > b) {
                return 1;
            } else {
                return -1;
            }
        }); 
        sortSign = 'down'; 
}   else {
        sort.innerHTML = `<svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5" width="2.5" height="12.5"/>
        <rect x="10" y="3.75" width="2.5" height="7.5" transform="rotate(-90 10 3.75)"/>
        <rect x="10" y="8.75" width="2.5" height="10" transform="rotate(-90 10 8.75)"/>
        <rect x="10" y="13.75" width="2.5" height="15" transform="rotate(-90 10 13.75)"/>
        <path d="M3.75 15L0.502405 10.3125L6.9976 10.3125L3.75 15Z"/>
        </svg> `;
        newArray.sort((note1, note2) => {
            let a = note1.querySelector('.text').value;
            let b = note2.querySelector('.text').value;
            if(a > b) {
                return -1;
            } else {
                return 1;
            }
        });
        sortSign = 'up';
    }
    field.innerHTML = '';
    field.append(...newArray);
});
    

/*Drag&Drops определеяем перетаскиваемые элементы*/