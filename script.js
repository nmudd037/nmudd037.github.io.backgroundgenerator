var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var textColor = document.querySelector(".textcolor");
var randomColorGenerator = document.getElementById("randomgen");

setGradient();

function setTextColor() {
	body.style.color = textColor.value;
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
    body.style.backgroundAttachment = "fixed";


	css.textContent = body.style.background + ";";
}

function randomColor() {
  var hex = "#" + Math.floor(Math.random()*16777216).toString(16);
  return hex
}

function generateRandomColorButton() {
  color1.value = randomColor();
  color2.value = randomColor();

  setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

textColor.addEventListener("input", setTextColor);

randomColorGenerator.addEventListener("click", generateRandomColorButton);
