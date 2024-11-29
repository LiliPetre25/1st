const backgroundMusic = document.getElementById("background");
const playButton = document.getElementById("playMusic");
const stopButton = document.getElementById("stopMusic");
const pauseButton = document.getElementById("pauseMusic");

function playMusic(){
    backgroundMusic.play();
}

function pauseMusic(){
    backgroundMusic.pause();
}

function stopMusic(){
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // resetam play la 0
}





playButton.addEventListener("click", playMusic)
stopButton.addEventListener("click", stopMusic)
pauseButton.addEventListener("click", pauseMusic)



// Generăm un număr aleator între 1 și 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
// Math.random() produce un numar intre 0 si 1 -> 0.87 
// Inmultim cu 100 sa obtinem un numar intre 0 si 100 
// 0.87 * 100 = 87 // 0.876 * 100 = 87,6
// Math.floor() rotunjeste numarul in jos la cel mai apropriat numar intreg
// Math.floor(87.6) -> 87

// Selectăm elementele din document pe care le vom folosi
const guessInput = document.getElementById("guessnumber"); // Câmpul de input unde utilizatorul introduce numărul
const guessButton = document.getElementById("ghicitor");   // Butonul pe care utilizatorul apasă pentru a ghici
const resetButton = document.getElementById("reset");      // Butonul pentru a reseta jocul
const message = document.getElementById("mesaj");          // Elementul unde afișăm mesajele către utilizator
// folosim const [numele] = elementul din pagina care ne intereseaza - pentru a redenumi elementul nostru ca sa nu
// fim nevoiti sa scriem de fiecare data tot elementul de exemplu document.getElementById("guessnumber"); 


// Funcția care verifică numărul introdus de utilizator
function checkGuess() {
    // Preluăm și convertim valoarea introdusă de utilizator într-un număr întreg
    const userGuess = parseInt(guessInput.value);
    // declaram o constanta (practic o variabila care nu se se schimba)
    // daca valoarea nu se schimba folosim o constanta, daca o modificam folosim variabila
    // folosim functia parseInt() care ne ajuta sa transformam valoarea / numarul intr-un numar intreg
    // daca avem 56.6 - o sa stearga tot ce este dupa virgula.  


    // Verificăm dacă valoarea este un număr valid între 1 și 100
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        // isNaN - verifica daca valoare introdusa nu este un numar 
        // verificam daca numarul ales este mai mic decat 1 sau mai mare decat 100
        // Afișăm un mesaj de eroare dacă numărul nu este valid
        message.textContent = 'Te rog introdu un număr între 1 și 100.';
    } else if (userGuess === randomNumber) {
        // Dacă utilizatorul a ghicit numărul corect
        message.textContent = 'Felicitări! Ești boss!';
        message.style.color = 'green';      // Schimbăm culoarea mesajului în verde
        guessButton.disabled = true;        // Dezactivăm butonul de ghicire
        guessInput.disabled = true;         // Dezactivăm câmpul de input
    } else if (userGuess < randomNumber) {
        // Dacă numărul introdus este mai mic decât numărul secret
        message.textContent = 'Prea mic! Încearcă un număr mai mare.';
    } else {
        // Dacă numărul introdus este mai mare decât numărul secret
        message.textContent = 'Prea mare! Încearcă un număr mai mic.';
    }
}

// Funcția care resetează jocul la valorile inițiale
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generăm un nou număr secret
    guessInput.value = '';            // Golesc câmpul de input
    message.textContent = '';         // Șterg mesajul afișat
    message.style.color = 'black';    // Resetez culoarea mesajului la negru
    guessButton.disabled = false;     // Re-activez butonul de ghicire
    guessInput.disabled = false;      // Re-activez câmpul de input
}

// Adăugăm un eveniment de click pentru butonul de ghicire
guessButton.addEventListener('click', checkGuess);
// Aici adaugam un eventListener ca se uita tot timpul la guessButton (Butonul Ghiceste) si asteapta cand se face
// click pe button. Can se face click pe button, atunci activeaza functia checkGuess


// Adăugăm un eveniment de click pentru butonul de resetare a jocului
resetButton.addEventListener('click', resetGame);
// Aici adaugam un eventListener ca se uita tot timpul la resetButton (Mai Incearca O data) si asteapta cand se face
// click pe button. Can se face click pe button, atunci activeaza functia resetGame