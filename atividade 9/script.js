const itemInput = document.getElementById('item');
const adicionar = document.getElementById('adicionar');
const lista = document.getElementById('lista');

adicionar.addEventListener('click', () => {
    const item = itemInput.value.trim();
    if (item !== '') {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
        itemInput.value = '';
    }
});