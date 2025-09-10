let textarea = document.getElementById('js-textarea');

function RunJS() {
    let textareaContent = textarea.value;
    let textareaOutput = eval(textareaContent);
    console.log(textareaOutput);
    alert(textareaOutput);
}