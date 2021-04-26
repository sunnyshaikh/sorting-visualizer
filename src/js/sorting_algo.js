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
    if (sorted) {
        $.toast({
            heading: "Already sorted",
            text: "To sort again, click New bars",
            icon: "success",
            hideAfter: 5000,
            position: "top-right"
        });
        return
    };
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
            await hold(parseInt(delay) - 250);
            bars[j].style.background = `linear-gradient(${colors.default1}, ${colors.default2})`;
            bars[j + 1].style.background = `linear-gradient(${colors.default1}, ${colors.default2})`;
        }
        // change background when element is in right place
        bars[n - 1 - i].style.background = `linear-gradient(${colors.success1}, ${colors.success2})`;
    }
    bars[0].style.background = `linear-gradient(${colors.success1}, ${colors.success2})`;
    $.toast({
        heading: "Success",
        text: "Elements sorting completed",
        icon: "success",
        hideAfter: 5000,
        position: "top-right"
    });
    enableElements();
    sorted = true;
}

// Insertion sort
const insertionSort = async () => {
    console.log('insertion sort', arrayOfBars.length);
    if (sorted) {
        $.toast({
            heading: "Already sorted",
            text: "To sort again, click New bars",
            icon: "success",
            hideAfter: 5000,
            position: "top-right"
        });
        return
    };
    // selecting all bars
    disableElements();
    const bars = document.querySelectorAll('.bar');
    let n = bars.length;
    bars[0].style.background = `linear-gradient(${colors.success1}, ${colors.success2})`;
    for (let i = 1; i < n; i++) {
        let key = bars[i].style.height;
        let j = i - 1;
        bars[i].style.background = `linear-gradient(${colors.danger1}, ${colors.danger2})`;
        await hold(delay);
        while (j >= 0 && parseInt(bars[j].style.height) > parseInt(key)) {
            bars[j].style.background = `linear-gradient(${colors.danger1}, ${colors.danger2})`;
            bars[j + 1].style.height = bars[j].style.height;
            j--;
            await hold(delay);
            for (let k = i; k >= 0; k--) {
                bars[k].style.background = `linear-gradient(${colors.success1}, ${colors.success2})`;
            }
        }
        bars[j + 1].style.height = key;
    }
    $.toast({
        heading: "Success",
        text: "Elements sorting completed",
        icon: "success",
        hideAfter: 5000,
        position: "top-right"
    });
    enableElements();
    sorted = true;
}

// Selection sort
const selectionSort = () => {
    alert('selection sort')
}