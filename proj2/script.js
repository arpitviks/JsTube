const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(red);
const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;            //To get the information related to the element.
}

console.log(getBGColor(pink));


// //Getting the background color of a box
// var orangeElementColor = getBGColor(orange);

// //Adding mouseEnter event to the orange box for 
// orange.addEventListener('mouseenter', () => {
//     center.style.background = orangeElementColor;
// })

//creating utility to change the color of the sphere as per the box as soon as
//the color of the box is changed.

/**CHANGING COLOR AS WE HOVER OVER THE BOXES */
const addBackground = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.background = color;
    })

}


addBackground(red, getBGColor(red));
addBackground(orange, getBGColor(orange));
addBackground(cyan, getBGColor(cyan));
addBackground(violet, getBGColor(violet));
addBackground(pink, getBGColor(pink));