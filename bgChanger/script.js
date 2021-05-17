function changeBackground() {
    let newColor = document.getElementById('color-picker').value;
    document.documentElement.style.cssText = `--background-color: ${newColor};`;
}

function


let arr = document.querySelectorAll('input');
arr.forEach(input => input.addEventListener('pointermove', (event) => console.log(event.target.value)))