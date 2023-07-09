require('./style.css');

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
const imagesNames = Object.keys(images);

//import images from "../images/pruebaa.jpeg";

// Creating DOM
/*
<div id="title">HOLA</div>
    <div id="generalContainer">
      <div id="imageContainer"></div>
      <button id="left">IZQUIERDA<</button>
      <button id="right">>DERECHAs</button>      
    </div>
<div id="sliderContainer"></div>
*/
const body = document.querySelector("body");
const title = document.createElement("div");
title.setAttribute("id","title");
const generalContainer = document.createElement("div");
generalContainer.setAttribute("id", "generalContainer");
const imageContainer = document.createElement("div");
imageContainer.setAttribute("id","imageContainer");
const leftButton = document.createElement("button");
leftButton.setAttribute("id", "leftButton");
leftButton.textContent = "<";
leftButton.addEventListener("click", goLeft);
const rightButton = document.createElement("button");
rightButton.setAttribute("id", "rightButton");
rightButton.textContent = ">";
rightButton.addEventListener("click", goRight);

generalContainer.appendChild(imageContainer);
generalContainer.appendChild(leftButton);
generalContainer.appendChild(rightButton);

const slidebar = document.createElement("div");
slidebar.setAttribute("id", "slidebar");

body.appendChild(title);
body.appendChild(generalContainer);
body.appendChild(slidebar);

const imagen = document.createElement("img");
imagen.setAttribute("src", images['1.jpg'].default);
//console.log(imagen.src.split("/"));

body.appendChild(imagen);



function goLeft(){
  const imageName = checkImageShowing();
  const indexOfImage = imagesNames.indexOf(imageName);
  if (indexOfImage == 0) {
    const lastImages = imagesNames.length - 1;
    const newImage = imagesNames[lastImages];
    imagen.setAttribute("src", images[newImage].default);
  }else{
    const newImage = imagesNames[indexOfImage - 1]
    imagen.setAttribute("src", images[newImage].default);
  }
}

function goRight(){
  const imageName = checkImageShowing();
  const indexOfImage = imagesNames.indexOf(imageName);
  const lastImage = imagesNames.length - 1;
  if (indexOfImage == lastImage) {
    const newImage = imagesNames[0];
    imagen.setAttribute("src", images[newImage].default);
  }else{
    const newImage = imagesNames[indexOfImage + 1]
    imagen.setAttribute("src", images[newImage].default);
  }
}

function checkImageShowing(){
  const splittedImageSource = imagen.src.split("/");
  const Long = splittedImageSource.length;
  const imageName = splittedImageSource[Long - 1];
  return imageName;
}