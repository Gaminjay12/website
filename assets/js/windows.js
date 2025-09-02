const file = document.getElementById('file-window')
const headers = document.querySelectorAll('.window-header');        
function File() {
    if (file.style.display === 'none') {
        file.style.display = 'block';
    } else {
        file.style.display = 'none';
    }
}