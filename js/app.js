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
    inputElementPixel.placeholder = 'Taille des pixel';
    buttonElementForm.textContent = 'Valider';

    headerElement.append(formElement);
    formElement.append(inputElementGrid, inputElementPixel, buttonElementForm);
}

createForm();