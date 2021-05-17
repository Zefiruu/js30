const rootStyle = document.documentElement.style;


function changeBackground() {
    let newColor = document.getElementById('color-picker').value;
    rootStyle.setProperty('--background-color', newColor);
    console.log(newColor)
}

function changeVariable(value, id) {
    rootStyle.setProperty(`--${id}` ,`${value}px`);
}


let arr = document.querySelectorAll('input');
arr.forEach(input => input.addEventListener('pointermove', ({target}) => changeVariable(target.value, target.id)))