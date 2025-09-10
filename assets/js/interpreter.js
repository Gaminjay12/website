let textarea = document.getElementById('js-textarea');

function RunJS() {
    console.log(textareaOutput);
    alert(textareaOutput);
    let textareaContent = textarea.value;
    let textareaOutput = eval(textareaContent);
}