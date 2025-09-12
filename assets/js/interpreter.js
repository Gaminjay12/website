const html = document.documentElement;
function runJS() {
    const input = document.getElementById('js-input').value;
    const output = document.getElementById('js-output');
    eval(input)
}