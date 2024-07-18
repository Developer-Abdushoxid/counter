let count = 0;

if (localStorage.getItem('count')) {
    count = parseInt(localStorage.getItem('count'));
    document.getElementById('count').textContent = count;
}

function increment() {
    count++;
    document.getElementById('count').textContent = count;
    localStorage.setItem('count', count);
}

function decrement() {
    if (count > 0) {
        count--;
        document.getElementById('count').textContent = count;
        localStorage.setItem('count', count);
    }
}

function reset() {
    count = 0;
    document.getElementById('count').textContent = count;
    localStorage.removeItem('count');
}
