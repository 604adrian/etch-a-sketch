// defining the DOM node
const theDiv = document.querySelector("#theDiv");

const theGrid = document.createElement("div");
theDiv.style.margin = "auto";
theDiv.style.display = "grid";
theDiv.style.width = "460px";
theDiv.style["grid-template-columns"] = "repeat(100, 1fr)";
theDiv.style["grid-column-gap"] = "0";
theDiv.style["grid-row-gap"] = "0";
theDiv.style.rowGap = "0";
theDiv.style.columnGap = "0";
theDiv.style["grid-column-gap"] = "0";

function changeColor(buttonClass, color) {
  buttonClass.style.backgroundColor = color;
  return;
}

for (let i = 0; i < 4200; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.height = "5px";
  pixel.style.width = "5px";
  pixel.style.backgroundColor = "grey";
  pixel.style.margin = "0";
  theDiv.appendChild(pixel);
}

const pixels = document.querySelectorAll(".pixel")
pixels.forEach((pixel) => {
  console.log("hello?");
  pixel.addEventListener("mouseenter", () => {
    pixel.style.backgroundColor = "black";
    changeColor(pixel, "black");  
  });
});

const clear = document.createElement("button"); 
clear.textContent = "CLEAR";
clear.style.display = "block";
clear.style.marginTop = "50px";
theDiv.appendChild(clear);

clear.addEventListener("click", () => {
  pixels.forEach((pixel) => {
    changeColor(pixel, "grey");
  });
});
