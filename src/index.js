require('./style.css');

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// Imagen loader
//import images from "../images/pruebaa.jpeg";
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
const imagesNames = Object.keys(images);
//

// Creating DOM
/*
<div id="title">HOLA</div>
    <div id="generalContainer">
      <div id="imageContainer"></div>
      <button id="left">IZQUIERDA<</button>
      <button id="right">>DERECHAs</button>      
    </div>
<div id="sliderContainer"></div>
<div id="footer"></div>
*/
const body = document.querySelector("body");
const title = document.createElement("div");
title.setAttribute("id","title");
title.textContent = "DASHBOARD TITLE"
const generalContainer = document.createElement("div");
generalContainer.setAttribute("id", "generalContainer");
const imageContainer = document.createElement("div");
imageContainer.setAttribute("id","imageContainer");
const leftButton = document.createElement("button");
leftButton.setAttribute("id", "leftButton");
leftButton.textContent = "↤";
leftButton.addEventListener("click", goLeft);
const rightButton = document.createElement("button");
rightButton.setAttribute("id", "rightButton");
rightButton.textContent = "↦";
rightButton.addEventListener("click", goRight);
const dotsContainer = document.createElement("div");
dotsContainer.setAttribute("id", "dotsContainer");


generalContainer.appendChild(imageContainer);
generalContainer.appendChild(leftButton);
generalContainer.appendChild(rightButton);
generalContainer.appendChild(dotsContainer);

const slidebar = document.createElement("div");
slidebar.setAttribute("id", "slidebar");

body.appendChild(title);
body.appendChild(generalContainer);
body.appendChild(slidebar);


const imagen = document.createElement("img");
imagen.setAttribute("id", "imageDisplayed");

//load image

imagen.setAttribute("src", images[imagesNames[0]].default);
imagen.classList.add("fade");
imageContainer.appendChild(imagen);


const footer = document.createElement("div");
footer.setAttribute("id", "footer");
footer.textContent = "Created by Jenner Caraballo"
body.appendChild(footer);
//console.log(imagesNames[0]);
removeFade();
/*  Creating slidebar                                                                                     */

imagesNames.forEach(element => {
  loadSliderImages(element);
  loadDots();    
});

function loadSliderImages(element){
  const slidebarImgContainer = document.createElement("div");
  slidebarImgContainer.classList.add("slidebarImgContainer");
  slidebarImgContainer.addEventListener("click", selectPicture);
  const newImagetoAdd = document.createElement("img");
  newImagetoAdd.classList.add("slidebarImage");
  newImagetoAdd.setAttribute("src", images[element].default);
  slidebarImgContainer.appendChild(newImagetoAdd)
  slidebar.appendChild(slidebarImgContainer);
}

function loadDots(){
  const oneDotContainer = document.createElement("div");
  oneDotContainer.classList.add("dot");
  oneDotContainer.textContent = "·";
  dotsContainer.appendChild(oneDotContainer);
}

//Refresh dots
dotPicture(imagesNames[0]);
slidebarImageShowing(imagesNames[0]);

function dotPicture(pictureName){
 const index = imagesNames.indexOf(pictureName);
 const dots = dotsContainer.childNodes;
 dots[index].classList.add("dotSelected");
}

function removeSelectedDot(){
  const dots = dotsContainer.childNodes;
  dots.forEach(element => {
    element.classList.remove("dotSelected");
  })
}

function slidebarImageShowing(pictureName){
  const index = imagesNames.indexOf(pictureName);
  const slidebarImgContainers = slidebar.childNodes;
  slidebarImgContainers[index].classList.add("slidebarImageShowing");
}

function removeSlidebarImageShowing(){
  const slidebarImgContainers = slidebar.childNodes;
  slidebarImgContainers.forEach(element => {
    element.classList.remove("slidebarImageShowing");
  })
}

/** event functions  */
function goLeft(){
  startCountDown();
  removeSelectedDot();
  removeSlidebarImageShowing();
  const imageName = checkImageName(imagen.src);//checkImageShowing();
  const indexOfImage = imagesNames.indexOf(imageName);
  let newImage = "";
  if (indexOfImage == 0) {
    const lastImages = imagesNames.length - 1;
    newImage = imagesNames[lastImages];
    imagen.setAttribute("src", images[newImage].default);
  }else{
    newImage = imagesNames[indexOfImage - 1]
    imagen.setAttribute("src", images[newImage].default);
  }
  imagen.classList.add("fade");
  removeFade();
  dotPicture(newImage);
  slidebarImageShowing(newImage);
}

function goRight(){
  startCountDown();
  removeSelectedDot();
  removeSlidebarImageShowing();
  const imageName = checkImageName(imagen.src);//checkImageShowing();
  const indexOfImage = imagesNames.indexOf(imageName);
  const lastImage = imagesNames.length - 1;
  let newImage = "";
  if (indexOfImage == lastImage) {
    newImage = imagesNames[0];
    imagen.setAttribute("src", images[newImage].default);
  }else{
    newImage = imagesNames[indexOfImage + 1]
    imagen.setAttribute("src", images[newImage].default);
  }
  imagen.classList.add("fade");
  removeFade();
  dotPicture(newImage);
  slidebarImageShowing(newImage);
}

function checkImageName(source){

  const splittedImageSource = source.split("/");//imagen.src.split("/");
  const Long = splittedImageSource.length;
  const imageName = splittedImageSource[Long - 1];
  return imageName;
}

function removeFade(){
  setTimeout(function() {
    imagen.classList.remove("fade");
  }, 1000);
}

function selectPicture(e){
  startCountDown();
  removeSelectedDot();
  removeSlidebarImageShowing();
  let imageName;
  if(e.target.childNodes.length){
    imageName = checkImageName(e.target.childNodes[0].src);
  }else{
    imageName = checkImageName(e.target.src);
  }
  imagen.setAttribute("src", images[imageName].default);
  imagen.classList.add("fade");  
  dotPicture(imageName);
  slidebarImageShowing(imageName);
  removeFade();
}

let interval = setInterval(goRight, 5000);
//Timer change image
function startCountDown(){
  clearInterval(interval);
  interval = setInterval(goRight, 5000);
}

//const interval = setInterval(goRight, 5000); 

window.addEventListener(`mousemove`, startCountDown);

