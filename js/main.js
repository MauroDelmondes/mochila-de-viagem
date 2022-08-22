const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach( (item) => {
    criaElemento(item);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];

    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    const existe = itens.find( item => item.nome === nome.value);

    if (existe) {
        itemAtual.id = existe.id;

        atualizaItem(itemAtual);

        itens[existe.id] = itemAtual;
    }else{
        itemAtual.id = itens.length;

        criaElemento(itemAtual);

        itens.push(itemAtual);
    }

    localStorage.setItem('itens', JSON.stringify(itens));

    nome.value = '';
    quantidade.value = '';
});

function criaElemento(item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;
    novoItem.appendChild(numeroItem);

    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);
}

function atualizaItem(item) {
    document.querySelector(`[data-id='${item.id}']`).innerHTML = item.quantidade;
}
