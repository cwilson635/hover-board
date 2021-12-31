const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 500;
let sqCount = 0;

// setInterval(createSquares, 200)



// writeText()

// function writeText() {
//     textEl.innerText = text.slice(0, idx);

//     idx++;

//     if (idx > text.length) {
//         idx = 1;
//     }

//     setTimeout(writeText, speed);
// };

// Small animation to add squares
addSquares();
function addSquares() {
    let isRunning = true;

    if (isRunning) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => setColor(square));
        square.addEventListener('mouseout', () => removeColor(square));
        container.appendChild(square);
        sqCount++;

        if (sqCount >= SQUARES) {
            isRunning = false;
        } else {
            setTimeout(addSquares, 0.01);
        };
    };
};

// Just adds squares
// for (let i = 0; i < SQUARES; i++) {
//     const square = document.createElement('div');
//     square.classList.add('square');
//     square.addEventListener('mouseover', () => setColor(square));
//     square.addEventListener('mouseout', () => removeColor(square));
//     container.appendChild(square);
// };

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
};

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
};