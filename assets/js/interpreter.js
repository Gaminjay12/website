let textarea = document.getElementById('js-textarea');
let textareaContent = textarea.value;
let textareaOutput = eval(textareaContent);
function RunJS() {
    console.log(textareaOutput);
    alert(textareaOutput);
}