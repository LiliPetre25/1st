// script.js

document.getElementById('changeTextBtn').addEventListener('click', 
    function() {
    var textElement = document.getElementById('changeableText');
    textElement.textContent = 'New text after click!';
});
