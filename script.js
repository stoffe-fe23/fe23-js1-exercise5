
function addHeading(type, headingText) {
    const heading = document.createElement(type);
    heading.innerText = headingText;
    heading.classList.add(type == "h1" ? "heading-1" : "heading-2");
    document.body.appendChild(heading);
}

addHeading("h1", "Övning 5");

////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "Return i konsollen");

function divideNumbers(x, y) {
    return x / y;
}

console.log("Division", divideNumbers(5, 10));


function getThirdElement(arr) {
    return arr[2];
}

const strings = [ 'en string', 'en annan string', 'en tredje string', 'en fjärde string'];
console.log("Third Element", getThirdElement(strings));

function celsiusToFahrenheit(degrees) {
    return (degrees * 1.8) + 32;
}

console.log("Fahrenheit", celsiusToFahrenheit(22));

function fahrenheitToCelsius(degrees) {
    return (degrees - 32) / 1.8;
}

console.log("Celsius", fahrenheitToCelsius(90));

function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log("Sum All", sumAll(12, 42, 22, 18, 9, 2));

function getSmallest() {
    let smallest = arguments[0];
    for (const arg of arguments) {
        if (arg < smallest) {
            smallest = arg;
        }
    }
    return smallest;
}

console.log("Smallest", getSmallest(12, -42, 22, 18, 9, 2));

function getMediumNumber() {
    let sum = 0;

    for (const arg of arguments) {
        sum += arg;
    }
    return sum / arguments.length;
}

console.log("Medium", getMediumNumber(12, 42, 22, 18, 9, 2));



////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "DOM - Kvadrat");


function getSquare(size, color) {
    const square = document.createElement("div");
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.backgroundColor = color;

    return square;
}

const myBox = getSquare(250, "lightseagreen");
document.body.appendChild(myBox);



////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "DOM - Temperatur");

function showTemperature(degrees) {
    const thermometer = document.createElement("div");
    thermometer.style.backgroundColor = degrees < 15 ? "blue" : "red";
    thermometer.innerHTML = (degrees < 15 ? "KALLT " : "VARMT ") + degrees + "&deg;C";

    return thermometer;
}

const temp = showTemperature(22);
document.body.appendChild(temp);


////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "DOM - Prioritering");

function createPrioMessage(text, priority) {
    const msg = document.createElement("div");
    msg.innerText = text;
    switch(priority) {
        case 1: msg.classList.add("msg-prio-1"); break;
        case 2: msg.classList.add("msg-prio-2"); break;
        case 3: msg.classList.add("msg-prio-3"); break;
        default: msg.classList.add("msg-prio-3"); break;
    }
    document.body.appendChild(msg);
}

createPrioMessage("Important!!", 1);
createPrioMessage("Kind of important but not really", 2);
createPrioMessage("Whatever...", 3);


////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "DOM - Lista");


function getList(title, items) {
    const heading = document.createElement("h3");
    heading.innerText = title;

    const list = document.createElement("ol");
    for (let i = 0; i < items.length; i++) {
        const item = document.createElement("li");
        item.innerText = items[i];
        list.appendChild(item);
    }

    const wrapper = document.createElement("div");
    wrapper.appendChild(heading);
    wrapper.appendChild(list);

    return wrapper;
}

const movies = ["Titanic", "Priness Mononoke", "Robocop"];
const movieList = getList("Movies", movies);
document.body.appendChild(movieList);




////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "DOM - Rad av kvadrater");

/*
Rad av kvadrater
En funktion som tar två argument: amount och color. 
Funktionen ska skapa lika många kvadrater som amount med bakgrundsfärgen color. 
Kvadraterna ska ligga bredvid varandra i en rad. 
Glöm inte att lägga till en margin eller border så att man kan urskilja varje kvadrat. 
*/

function createSquares(amount, color) {
    const wrapperBox = document.createElement("div");
    wrapperBox.style.display = "flex";
    wrapperBox.style.flexWrap = "wrap";
    wrapperBox.style.gap = "1rem";

    for (let i = 0; i < amount; i++) {
        const square = document.createElement("div");
        square.style.width = "100px";
        square.style.height = "100px";
        square.style.backgroundColor = color;
        wrapperBox.appendChild(square);
    }
    return wrapperBox;
}

const boxes = createSquares(6, "lightsalmon");
document.body.appendChild(boxes);




////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "DOM - Listor");


function createLists(listCount, itemCount) {
    for (let i = 0; i < listCount; i++) {
        const list = document.createElement("ol");

        for (let j = 0; j < itemCount; j++) {
            const item = document.createElement("li");
            list.appendChild(item);
        }

        document.body.appendChild(list);
    }
}

createLists(2,4);


////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "Utmaning - Färgskiftning");

function createHeadings(amount) {
    const firstHue = 240;
    const lastHue = 300;
    const firstLight = 50;
    const lastLight = 25;
    
    for (let i = 0; i < amount; i++) {
        const heading = document.createElement("h3");
        heading.innerText = `Heading ${i}`;
        heading.style.margin = 0;
        const hue = firstHue + ((lastHue - firstHue) / (amount - 1)) * i;
        const light = firstLight + ((lastLight - firstLight) / (amount - 1)) * i;
        heading.style.color = "white";
        heading.style.backgroundColor = `hsl(${hue}, 100%, ${light}%)`;
        document.body.appendChild(heading);
    }
}

createHeadings(20);



////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "Utmaning - Grid av kvadrater");

function createSquareGrid(rowCount, colCount) {
    const boxSize = 100;
    
    const wrapperBox = document.createElement("div");
    wrapperBox.style.display = "grid";
    wrapperBox.style.justifyContent = "start";
    wrapperBox.style.gridTemplateRows = `repeat(${rowCount}, ${boxSize}px)`;
    wrapperBox.style.gridTemplateColumns = `repeat(${colCount}, ${boxSize}px)`;
    wrapperBox.style.gap = "1rem";

    const amount = colCount * rowCount;

    for (let i = 0; i < amount; i++) {
        const square = document.createElement("div");
        square.style.width = `${boxSize}px`;
        square.style.height = `${boxSize}px`;
        square.style.backgroundColor = "lightsalmon";
        wrapperBox.appendChild(square);
    }
    return wrapperBox;
}

const boxGrid = createSquareGrid(3,6);
document.body.appendChild(boxGrid);