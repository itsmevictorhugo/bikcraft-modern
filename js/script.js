// Ativar Links do Menu
const links = document.querySelectorAll('.header-menu a');


function ativarLinks(link) {
    const url = location.href;
    const href = link.href;
    if(url.includes(href)){
        link.classList.add('ativo');
    }
}

links.forEach(ativarLinks);


// Ativar Itens do Orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento) {
    elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);