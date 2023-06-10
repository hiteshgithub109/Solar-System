document.addEventListener('DOMContentLoaded', function () {
    let selected = document.getElementById('planets');
    selected.selectedIndex = 0;
});
const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90
};

const planetGravitationalAccelaration = {
    Mercury: 3.7,
    Venus: 8.87,
    Earth: 9.8,
    Moon: 1.62,
    Mars: 3.71,
    Jupiter: 24.79,
    Saturn: 10.44,
    Uranus: 8.87,
    Neptune: 11.15,
    Pluto: 0.62
};

const textToNumber = (text) => {
    if (text === '') return 'Mass is required';
    if (!isNaN(text)) return Number(text);
    const numarr = text.split('-');
    if (numarr.length === 1) return numbers[numarr[0]];
    if (numarr.length === 2) return numbers[numarr[0]] + numbers[numarr[1]];
    return 'Invalid Input!\nTry giving input as number'
};

const calcMass = () => {
    let text = document.getElementById('mass').value;
    let mass = textToNumber(text);
    return mass;
};

let container = document.querySelector('.flex-container');
let p = document.createElement('p');
let massRequired = document.createElement('div');
massRequired.id = 'mass-required';
let pw;

function displayWeight(weight, planet) {
    let childContainer = document.createElement('div');
    childContainer.className = 'flex-item image';
    image = document.createElement('img');
    image.id = 'planetimg';
    removeAllChildElements(container);
    container.appendChild(childContainer);
    childContainer.appendChild(image);
    displayPlanet();
    childContainer = document.createElement('div');
    childContainer.className = 'flex-item description';
    container.appendChild(childContainer);
    p.id = 'description-p';
    document.querySelector('.description').appendChild(p);
    p.textContent = `The weight of the object of planet ${planet} `
    if (!pw) pw = document.createElement('div');
    pw.id = 'weight-p';
    pw.innerHTML = `${weight.toFixed(2)} N`;
    document.querySelector('.description').appendChild(pw);
}

const calculateWeight = () => {
    let mass = calcMass();
    let planet = document.getElementById('planets').value;
    let g = planetGravitationalAccelaration[planet];
    if (isNaN(mass)) {
        removeAllChildElements(container);
        container.appendChild(massRequired);
        massRequired.textContent = mass;
        return;
    }
    let weight = mass * g;
    displayWeight(weight, planet);
};

const displayPlanet = () => {
    let planet = document.getElementById('planets').value.toLowerCase();
    const imgsource = `images/${planet}.png`;
    document.getElementById('planetimg').src = imgsource;
}

function removeAllChildElements(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}