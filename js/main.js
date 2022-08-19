const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = e.target.elements['nome'].value;
    const quantidade = e.target.elements['quantidade'].value;

    criaElemento(nome, quantidade);
});

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);
}
