
let randomnumber = math.floor(Math.random() * 20) + 1;
const maxGuesses = 5;
let gusses = 0;

const guessimput = document.getElementById("guessimput");
const guessbutton = document.getElementById("guessbutton");
const message = document.getElementById("message");
const guessesleft = document.getElementById("guessesleft");

guessbutton.addEventListener('click', () => {
    const guess = number(guessimput.valeu);
guesses++;
 
if (guesses === maxGuesses) {
    message.textcontent = 'Tu esi lietojis visus mēģinājumus. Pareizais skaitlis bija ${randomnumber}.';
guessbutton.disabled = true;
} else {
    guessesleft.textcontent = ' ${maxguesses - guesses}';
     
    if(guess === randomnumber) {
        message.textcontent = 'yu uzminēji! tev bija nepieciešami ${gueses} mēģinajumi.';
        guessbutton.disabled = true;
    } else if (guess < randomnumber) {
        message.textcontent = 'skaitlis ir pārāk mazs.';
    } else {
        message.textcontent = 'skaitlis ir pārak liels.';
    }
}

guessimput.value = '';
});










