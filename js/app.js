console.log('DeViosaure 4ever !!')

// CREATION DU FORMULAIRE
const createForm = () => {
    const createHeaderElement = document.querySelector('header');
    const createFormElement = document.createElement('form');
    const createInputElementGrid = document.createElement('input');
    const createInputElementPixel = document.createElement('input');
    const createButtonElementForm = document.createElement('button');
    

    createFormElement.className = ('formulaire');
    createInputElementGrid.className = ('formulaire__grille');
    createInputElementPixel.className = ('formulaire__pixel');
    createButtonElementForm.className = ('formulaire__bouton');
    

    createInputElementGrid.placeholder = 'Taille de la grille';
    createInputElementPixel.placeholder = 'Taille des pixels';
    createButtonElementForm.textContent = 'Valider';
    createButtonElementForm.type = 'submit';

    createHeaderElement.append(createFormElement);
    createFormElement.append(createInputElementGrid, createInputElementPixel, createButtonElementForm);
}

createForm();

// CREATION DE LA GRILLE


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


// Fonction pour créer la section contenant la grille

const sectionContainerGrid = () => {
    const createSectionGrid = document.createElement('section');
    createSectionGrid.className = ('contenaire-grille');
    const mainElement = document.querySelector('main');

    mainElement.append(createSectionGrid);

}

sectionContainerGrid()

// Créer la grille avec les valeurs
const recreateGrid = (infoGrid) => {

    const sectionGridElement = document.querySelector('.contenaire-grille');

    sectionGridElement.innerHTML = ''; 

    for (let i = 0; i < infoGrid.column; i++) {
        const sectionElementGrid = document.createElement('section');
        sectionElementGrid.className = 'grille';
        sectionGridElement.append(sectionElementGrid);

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
    const inputElementColor = document.querySelector('.color-container__color');

    inputElementColor.addEventListener('input', () => {
        const colorValue = inputElementColor.value;
        console.log(`La valeur de la couleur est : ${colorValue}`);

        pixelsElements.forEach((pixelElement) => {
            pixelElement.style.backgroundColor = colorValue;
        });
    });

    pixelsElements.forEach((pixelElement) => {
        pixelElement.addEventListener('click', () => {
            console.log("Le click fonctionne");
            pixelElement.classList.toggle('color-pixel');
        });
    });
}
