let numberOfDrums = document.querySelectorAll('.drum').length;

let button = document.querySelectorAll('.drum');

// Button Press
for (let i=0; i < numberOfDrums; i++) {
    button[i].addEventListener('click', function() {
        let buttonValue = this.innerHTML
        playSound(buttonValue);
    });
}

// Keyboard Press
document.addEventListener("keydown", function(event) {
    playSound(event.key)
})

// This function plays the sound
function playSound(key) {
    switch (key) {
        case "w":
            w = new Audio('/sounds/tom-1.mp3');
            w.play();
        break;
        case "a":
            a = new Audio('/sounds/tom-2.mp3');
            a.play();
        break;
        case "s":
            s = new Audio('/sounds/tom-3.mp3');
            s.play();
        break;
        case "d":
            d = new Audio('/sounds/tom-4.mp3');
            d.play();
        break;
        case "j":
            j = new Audio('/sounds/crash.mp3');
            j.play();
        break;
        case "k":
            k = new Audio('/sounds/snare.mp3');
            k.play();
        break;
        case "l":
            l = new Audio('/sounds/kick-bass.mp3');
            l.play();
        break;
        default:
            console.log(`The key ${key} is not assigned to any sound!`)
    }
}