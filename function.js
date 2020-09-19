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