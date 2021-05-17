const rootStyle = document.documentElement.style;


function changeBackground() {
    let newColor = document.getElementById('color-picker').value;
    rootStyle.setProperty('--background-color', newColor);
    console.log(newColor)
}

function changeVariable() {
    rootStyle.setProperty(`--${this.id}` ,`${this.value}px`);
}


let arr = document.querySelectorAll('input');
arr.forEach(input => input.addEventListener('pointermove', changeVariable))