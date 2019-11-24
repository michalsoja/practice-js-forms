document.addEventListener('DOMContentLoaded', init);

const inputColor = document.querySelector('input[name="color"]');
const inputRange = document.querySelector('input[name="opacity"]');
const boxElement = document.querySelector('.box')  // nie podoba mi się, że muszę pobrać ten sam element tutaj...
let opacity;
let color = '#000000';

inputColor.addEventListener('change', changeColorAndOpacity);
inputRange.addEventListener('change', changeColorAndOpacity);

function changeColorAndOpacity(e){
    if(e.target.name == 'color'){
        color = e.target.value;
    }
    if(e.target.name == 'opacity'){
        opacity = e.target.value;
        opacity = opacity/100;
    }
    setBoxShadow(boxElement,color, opacity)
}

console.log(opacity, color)
function init() {
    const boxElement = document.querySelector('.box');   //...i tutaj. Można to lepiej rozegrać?
    
    setBoxShadow(boxElement, '#000000');
}

function setBoxShadow(element, colorInHex, opacity = 1) {
    const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`;

    element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}



function getChannelColor(colorInHex, channelName) {
    let start;
    switch(channelName) {
        case 'red':
            start = 1;
            break;
        case 'green':
            start = 3;
            break;
        case 'blue':
            start = 5;
            break;
    }

    const channelColorHex = colorInHex.substr(start, 2);
    const channelColorDec = parseInt(channelColorHex, 16);

    return channelColorDec; 
}