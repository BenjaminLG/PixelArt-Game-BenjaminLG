console.log('DeViosaure 4ever !!')

// CREATION DU FORMULAIRE
const createForm = () => {
    const headerElement = document.querySelector('header');
    const formElement = document.createElement('form');
    const inputElementGrid = document.createElement('input');
    const inputElementPixel = document.createElement('input');
    const buttonElementForm = document.createElement('button');

    formElement.className = ('formulaire');
    inputElementGrid.className = ('formulaire__grille');
    inputElementPixel.className = ('formulaire__pixel');
    buttonElementForm.className = ('formulaire__bouton');

    inputElementGrid.placeholder = 'Taille de la grille';
    inputElementPixel.placeholder = 'Taille des pixels';
    buttonElementForm.textContent = 'Valider';
    buttonElementForm.type = 'submit';

    headerElement.append(formElement);
    formElement.append(inputElementGrid, inputElementPixel, buttonElementForm);
}

createForm();

// CREATION DE LA GRILLE
const mainElement = document.querySelector('main');

// VALEUR DES INPUTS
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const columnInputValue = form.querySelector('.formulaire__grille').value;
    const pixelInputValue = form.querySelector('.formulaire__pixel').value;

    // Stocke les valeurs
    const infoGrid = {};

    // Met à jour les valeurs des inputs
    infoGrid.column = parseInt(columnInputValue);
    infoGrid.pixel = parseInt(pixelInputValue);

    console.log(`La valeur de la grille est de : ${columnInputValue}`);
    console.log(`La taille des pixels est de : ${pixelInputValue}`);

    // Efface la valeur des inputs
    form.querySelector('.formulaire__grille').value = '';
    form.querySelector('.formulaire__pixel').value = '';

    recreateGrid(infoGrid);
});

// Créer la grille avec les valeurs
const recreateGrid = (infoGrid) => {
    mainElement.innerHTML = ''; 

    for (let i = 0; i < infoGrid.column; i++) {
        const sectionElementGrid = document.createElement('section');
        sectionElementGrid.className = 'grille';
        mainElement.append(sectionElementGrid);

        for (let j = 0; j < infoGrid.column; j++) {
            const divElementPixel = document.createElement('div');
            divElementPixel.className = 'grille__pixels';
            divElementPixel.style.width = `${infoGrid.pixel}px`;  
            divElementPixel.style.height = `${infoGrid.pixel}px`;
            sectionElementGrid.append(divElementPixel);
        }
    }

    
    changeColor();
}

// Fonction du changement de couleur au clic
const changeColor = () => {
    const pixelsElements = document.querySelectorAll('.grille__pixels');
    pixelsElements.forEach((pixelElement) => {
        pixelElement.addEventListener('click', () => {
            console.log("Le click fonctionne");
            pixelElement.classList.toggle('red-pixel');
        });
    });
}
