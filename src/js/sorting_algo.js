// hold function
const hold = (delay) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, delay)
    })
}

// swap function 
const swap = (bar1, bar2) => {
    let tmp = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = tmp;
}

// Bubble sort
const bubbleSort = async () => {
    console.log('bubble sort', arrayOfBars.length);
    // disable buttons and sliders
    disableElements();
    // selecting all bars
    const bars = document.querySelectorAll('.bar');
    let n = bars.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            bars[j].style.background = `linear-gradient(${colors.danger1}, ${colors.danger2})`;
            bars[j + 1].style.background = `linear-gradient(${colors.danger1}, ${colors.danger2})`;
            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                // wait to compare
                await hold(delay);
                swap(bars[j], bars[j + 1]);
            }
            bars[j].style.background = `linear-gradient(${colors.default1}, ${colors.default2})`;
            bars[j + 1].style.background = `linear-gradient(${colors.default1}, ${colors.default2})`;
        }
        // change background when element is in right place
        bars[n - 1 - i].style.background = `linear-gradient(${colors.success1}, ${colors.success2})`;
    }
    bars[0].style.background = `linear-gradient(${colors.success1}, ${colors.success2})`;
    swal({
        title: "Sorted :)",
        icon: "success",
    });
    enableElements();
}

// Insertion sort
const insertionSort = () => {
    alert('insertion sort')
}

// Selection sort
const selectionSort = () => {
    alert('selection sort')
}