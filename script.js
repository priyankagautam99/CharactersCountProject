let input = document.getElementById('inputtext');
let count = document.getElementById('count');

input.addEventListener('input', () => {
    count.textContent = inputtext.value.length;
});

    
