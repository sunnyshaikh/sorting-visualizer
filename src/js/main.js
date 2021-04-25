// selectors
const barContainer = document.getElementById('bar-container');

// change bar direction 
const changeBarDirection = () => {
    barContainer.classList.toggle('active');
}

// generate bars
let arrayOfBars = [];
const generateBars = (size = 50) => {
    barContainer.innerHTML = '';
    arrayOfBars = [];
    for (let i = 0; i < size; i++) {
        let height = Math.floor(Math.random() * 100 + 1);
        arrayOfBars.push(height);
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.title = `height=${height}`;
        bar.style.height = `${height}%`;
        barContainer.appendChild(bar);
    }
}

generateBars();

// generate bars on click 
const newBtn = document.getElementById('new-array');
newBtn.addEventListener('click', () => {
    generateBars(arrayOfBars.length)
})

