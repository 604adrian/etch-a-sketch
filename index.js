// defining the DOM node
const theDiv = document.querySelector("#theDiv");

const border = document.createElement("div");
border.style.margin = "auto";
border.style.width = "800px";
border.style.height = "500px";
border.style.backgroundColor = "darkred";
border.style.display = "grid";
border.style.gridTemplateColumns = "1fr 6fr 1fr";
border.style.gridTemplateRows = '1fr 4fr 1fr';
border.style.padding = "20px";
border.style.marginTop = "50px";
border.style.borderRadius = "20px"

const theGrid = document.createElement("div");
theGrid.style.display = "grid";
theGrid.style["grid-template-columns"] = "repeat(150, 5px)";
theGrid.style["grid-template-rows"] = "repeat(90, 5px)";
theGrid.style["grid-column-gap"] = "0";
theGrid.style["grid-row-gap"] = "0";
theGrid.style.rowGap = "0";
theGrid.style.columnGap = "0";
theGrid.style["grid-column-gap"] = "0";
theGrid.style.gridColumn = "2 / 3";
theGrid.style.grodRow = "2 / 3";
theGrid.style.backgroundColor = "grey"
theGrid.style.width= "750px";
theGrid.style.height= "450px";
theGrid.style.margin = "0";
theGrid.style.padding = "0";
theGrid.style.columnGap = "0";
theGrid.style.rowGap = "0";

function changeColor(buttonClass, color) {
  buttonClass.style.backgroundColor = color;
  return;
}

for (let i = 0; i < 13500; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.height = "5px";
  pixel.style.width = "5px";
  pixel.style.backgroundColor = "linen";
  pixel.style.margin = "0";
  theGrid.appendChild(pixel);
}

// nodelist
border.appendChild(theGrid);
theDiv.appendChild(border);

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
clear.style.margin = "auto";
clear.style.marginTop = "50px";
clear.style.display = "flex";
clear.style.justifyContent = "center";

theDiv.appendChild(clear);

clear.addEventListener("click", () => {
  pixels.forEach((pixel) => {
    changeColor(pixel, "linen");
  });
});


