/* Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
Da lì parte un timer di 30 secondi.
Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const playButton = document.querySelector('header button'); //take play button

playButton.addEventListener('click', function() {
    const SimonSays = []; //reset array
    generateArrayOfUniqueRandomNumber(1, 100, SimonSays, 5);
    console.log(SimonSays);

    const field = document.getElementById('field');
    field.innerHTML = ''; //reset boxes in field
    for (let i = 0; i < 5; i++) {
        const box = createBox(SimonSays[i]);
        field.appendChild(box);
    }
    setTimeout(() => {
        field.classList.add('d-none');
    }, 5000);
})