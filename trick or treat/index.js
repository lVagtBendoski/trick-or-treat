const treatBag = ['images/M&Ms.jpg', 'images/Nerds.jpg', 'images/Reeses.jpg', 'images/Rollo.jpg', 'images/Sour Patch.jpg'];
imgContainer = document.getElementById('trickOrTreatImg');
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}
  
grabItem = () =>{
    index = getRandomInt(treatBag.length);
    imgContainer.src = treatBag[index];
}