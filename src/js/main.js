// selectors
const barContainer = document.getElementById('bar-container');
// colors
const colors = {
    success1: "#5AFF15",
    success2: "#00B712",
    danger1: "#FBD72B",
    danger2: "#F9484A",
    default1: "#05E8BA",
    default2: "#087EE1",
}

let sorted = false;

// change bar direction 
const changeBarDirection = () => {
    barContainer.classList.toggle('active');
}

// generate bars
let arrayOfBars = [];
const size = document.getElementById('size').value;
const generateBars = (size) => {
    sorted = false;
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

generateBars(size);

// generate bars on click 
const newBtn = document.getElementById('new-array');
newBtn.addEventListener('click', () => {
    generateBars(arrayOfBars.length)
})

// on start button
const startSorting = () => {
    const type = document.getElementById('algo').value;
    if (type == 0)
        bubbleSort();
    else if (type == 1)
        insertionSort();
    else if (type == 2)
        selectionSort();
    else if (type == 3)
        mergeSort();
    else
        quickSort();
}

// speed
let delay = document.getElementById('speed').value;
const changeSpeed = speed => {
    delay = parseInt(speed);
}

// disable elements when sorting in process
const disableElements = () => {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        if (!btn.classList.contains('no-disable')) {
            btn.setAttribute('disabled', 'disabled')
            btn.classList.add('btn-disabled');
        }
    });

    document.getElementById('size').disabled = true;
    document.getElementById('algo').disabled = true;
}

// enable elements when sorting completed
const enableElements = () => {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.removeAttribute('disabled');
        btn.classList.remove('btn-disabled');
    });

    document.getElementById('size').disabled = false;
    document.getElementById('algo').disabled = false;
}
