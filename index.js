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


for (let i = 0; i < 42; i++) {
  const pixel = document.createElement("div");
  console.log(pixel);
  pixel.classList.add("pixel");
  pixel.style.height = "100px";
  pixel.style.width = "100px";
  pixel.style.backgroundColor = "grey";
  console.log("ffs");
  theDiv.appendChild(pixel);
}

/*
function makeRows(rows, cols) {
  theDiv.style.setProperty('--grid-rows', rows);
  theDiv.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows); c++) {
    let row = document.createElement("div");
    row.display = "in-line grid";
    // row.display["grid-template-columns"] = `repeat(${cols}, 1fr)`;
      for (i = 0; i < cols; i++) {
        let pixel= document.createElement("div");
        pixel.innerText = (c + 1);
        pixel.classList.add('pixel');
        row.appendChild(pixel);
      }
    theDiv.appendChild(row).className = "grid-item";
  };
};
*/
// drawPixels()
//makeRows(16, 16);
// defining the size for each button at once
const pixels = document.querySelectorAll(".pixel")
pixels.forEach((pixel) => {
  console.log("hello?");
  pixel.addEventListener("mouseenter", () => {
    console.log("help");
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
    changeColor(pixel, "white");
  });
});
