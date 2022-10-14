/**
 * copy start from here
 */
let copy = document.getElementById('copy');
let copyBtn = document.getElementById('copyBtn');
copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(copy.value);
        alert('Text copied');
        copy = '';
});

/**
 * cut start from here
 */
let cut = document.getElementById('cut');
let cutBtn = document.getElementById('cutBtn');
cutBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(cut.value);
    alert('Text cut succeed');
    cut.value = '';
});

/**
 * paste start from here
 */
let paste = document.getElementById('paste');
let pasteBtn = document.getElementById('pasteBtn');
pasteBtn.addEventListener('click', function(){
    paste.value = '';
    navigator.clipboard.readText()
    .then(function(text){
        paste.value = text;
    })
});