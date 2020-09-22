function change() {
    let newColor = document.getElementById('color-picker').value;
    document.documentElement.style.cssText = `--var1: ${newColor};`;
}
let arr = document.querySelectorAll('input');
arr.forEach(input => input.addEventListener('mousemove', () => console.log('')))