var red_button = document.getElementById("dot-red");
var blue_button = document.getElementById("dot-blue");
var green_button = document.getElementById("dot-green");
var extra_css = document.getElementById("extra_style");

red_button.addEventListener("click", () => {
    extra_css.href = 'red.css';
})

blue_button.addEventListener("click", () => {
    extra_css.href = "blue.css";
})

green_button.addEventListener("click", () => {
    extra_css.href = "green.css";
})

/* ------------------------------------------------------------------------------------------------------------*/
try {
    var title = document.getElementsByClassName('Content_Of_Project_Title')[0];
    var previous = document.getElementsByClassName('previous')[0];
    var next = document.getElementsByClassName("next")[0]

    if (title.innerHTML === 'Space Invaders') {
        next.href = "./Drawnario.html";
        previous.href = './Hangman.html';
    } else if (title.innerHTML === 'Drawnar.io') {
        next.href = './Hangman.html';
        previous.href = "./SpaceInvaders.html";
    } else if (title.innerHTML ==="Hangman") {
        next.href = "./SpaceInvaders.html";
        previous.href = "./Drawnario.html";
    }

} catch(error) {
    var x = error;
}

try {
    var project_images = document.getElementsByClassName("Content_Of_Project_Images").childNodes;
    console.log(project_images);
} catch(error) {console.log(error);}


var play_button = document.getElementById('number3');
var game_image = document.getElementById('game-image');
play_button.addEventListener('click', ()=> {
    window.location = 'https://dimostheocharis.github.io/Snake.io/StartingScreen.html';
    console.log('yeap');
})

game_image.addEventListener('click', ()=> {
    window.location = 'https://dimostheocharis.github.io/Snake.io/StartingScreen.html';
    console.log('yeap');
})