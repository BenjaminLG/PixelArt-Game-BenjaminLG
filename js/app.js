console.log('DeViosaure 4ever !!')


// CREATION DU FORMULAIRE

const createForm = () => {

    const headerElement = document.querySelector('header');

    const FormElement = document.createElement('form');
    const inputElementGrid = document.createElement('input');
    const inputElementPixel = document.createElement('input');
    const buttonElementForm = document.createElement('button');

    FormElement.className = ('formulaire');
    inputElementGrid.className = ('formulaire__grille');
    inputElementPixel.className = ('formulaire__pixel');
    buttonElementForm.className = ('formulaire__bouton');

    inputElementGrid.placeholder = 'Taille de la grille';
    inputElementPixel.placeholder = 'Taille des pixel';
    buttonElementForm.textContent = 'Valider';
    buttonElementForm.type = 'submit';

    headerElement.append(FormElement);
    FormElement.append(inputElementGrid, inputElementPixel, buttonElementForm);
}

createForm();


// CREATION DE LA GRILLE

const infoGrid = {
    column : 8,
    pixel : 8,
    pixelSize : "",
}



const mainElement = document.querySelector('main');

for (let i = 0; i < infoGrid.column; i++) {
    const sectionElementGrid = document.createElement('section');
    sectionElementGrid.className = ('grille');
    mainElement.append(sectionElementGrid);

    for (let i = 0; i < infoGrid.pixel; i++) {
        const divElementPixel = document.createElement('div');
        divElementPixel.className = ('grille__pixels');
        sectionElementGrid.append(divElementPixel);
    }
}

// Fonction du changement de couleur au clic

const changeColor = () => {
    const pixelsElements = document.querySelectorAll('.grille__pixels');
    console.log(pixelsElements)
    
    pixelsElements.forEach((pixelElement) => {
        pixelElement.addEventListener('click', () => {
            console.log("Le click fonctionne");
            pixelElement.classList.toggle('red-pixel');
        });
    });
}

changeColor();


// VALEUR DES INPUTS 
const columnInputValue = document.querySelector('.formulaire__grille').value;

console.log(columnInputValue);

// Le clic du bouton Valider

const buttonElementFormForInput = document.querySelector('.formulaire__bouton');

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {

    if(inputElementGrid.value === ""){
        e.preventDefault();
    } else if (inputElementGrid.value === !isNaN){
        
    }
})


