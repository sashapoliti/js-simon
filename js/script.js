/* Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
Da lì parte un timer di 30 secondi.
Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const playButton = document.querySelector('header button'); //take play button
const answerButton = document.querySelector('main>div#answer button'); //take answer button
const field = document.getElementById('field');
const answer = document.getElementById('answer');

let SimonSays = [];
let played = false;
playButton.addEventListener('click', function() {
    /* generate array with unique numbers */
    SimonSays = []; //reset array
    answer.classList.add('opacity-0'); //reset answer field
    document.querySelectorAll('main>div#answer input').forEach(input => {
        input.classList.remove('true', 'false');
        input.disabled = false;
        input.value = '';
    }) //reset input
    let timer = 30; //reset timer
    generateArrayOfUniqueRandomNumber(1, 100, SimonSays, 5);
    console.log(SimonSays);

    /* create boxes */    
    field.innerHTML = ''; //reset boxes in field
    for (let i = 0; i < 5; i++) {
        const box = createBox(SimonSays[i]);
        field.appendChild(box);
    }

    /* start timer */
    const timerElement = document.getElementById('timer');
    field.classList.remove('opacity-0'); //reset field display
    timerElement.classList.remove('opacity-0'); //reset timer
    timerElement.innerHTML = timer;     
    myInterval = setInterval(() => {
        timerElement.innerHTML = timer; 
        if (timer <= -1) {
            clearInterval(myInterval)
            timerElement.innerHTML = '';
            timerElement.classList.add('opacity-0');
        }
        timer-= 1;
    }, 1000);
    setTimeout(() => {        
        field.classList.add('opacity-0');
        answer.classList.remove('opacity-0');
    }, 32000);
    
    played = true;
})

/* input user */    
answerButton.addEventListener('click', function() {
    if (played) {
        for (let i = 0; i < 5; i++) {
            const inputElement = document.querySelector(`main>div#answer input:nth-child(${i + 1})`);
            if (SimonSays.includes(parseInt(inputElement.value))) {
                inputElement.classList.add('true');
                inputElement.disabled = true;
            } else {
                inputElement.classList.add('false');
                inputElement.disabled = true;
            }
        }
        played = false;
        field.classList.remove('opacity-0');
    } else { return; }
})