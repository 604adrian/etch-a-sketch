// defining the DOM node
const theDiv = document.querySelector("#theDiv");
theDiv.style.margin = "auto";
theDiv.style.marginTop = "80px";
theDiv.style.width = "660px";
theDiv.style["grid-template-rows"] = "repeat(100, 1fr)";
theDiv.style["grid-template-columns"] = "repeat(100, 1fr)";
theDiv.style.justifyItems = "center";

function changeColor(buttonClass, color) {
  buttonClass.style.backgroundColor = color;
  return;
}

function drawPixels() {
  for (let i = 0; i < 42; i++) {
    const pixel = document.createElement("button");
    console.log(pixel);
    pixel.classList.add('pixel');
    pixel.style.height = "100px";
    pixel.style.width = "100px";
    pixel.addEventListener("click", () => {
      changeColor(pixel, "black");
    });
    theDiv.appendChild(pixel);
  }
}

// defining the size for each button at once
const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
  button.style.height = "100px";
  button.style.width = "100px";
  button.style.backgroundPosition = "center center";
  backgroundSize = "100% 100%";
  button.addEventListener("mouseover", () => {
    changeColor(button, "black");  
  });
});

drawPixels();

const clear = document.createElement("button"); 
clear.textContent = "CLEAR";
clear.style.display = "block";
clear.style.marginTop = "50px";
theDiv.appendChild(clear);

clear.addEventListener("click", () => {
  buttons.forEach((button) => {
    changeColor(button, "white");
  });
});
