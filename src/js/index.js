/* Your JS here. */
console.log('Hello World!')

const content = document.querySelector('.content');

function changeColor(color) {
    const card = document.querySelector('.card');
    card.style.backgroundColor = color;
}

document.getElementById('redBtn').addEventListener('click', () => changeColor('rgba(216, 32, 32, 0.821)'));
document.getElementById('blueBtn').addEventListener('click', () => changeColor('rgba(32, 57, 216, 0.82)'));
document.getElementById('greenBtn').addEventListener('click', () => changeColor('rgba(10, 157, 57, 0.82)'));

const image = document.getElementById('profile');
const heading = document.getElementById('name');

image.addEventListener('click', () => {
    content.style.display = 'none';
});

heading.addEventListener('click', () => {
    content.style.display = 'block';
});