let add = document.getElementById("descricao");
let pendentes = document.getElementById("tarefas");
let finalizadas = document.getElementById("finalizadas");
let valoradd = "";

function adicionar() {
    valoradd = add.value;
    const novoItem = document.createElement('li');
    const textoItem = valoradd;
    novoItem.innerHTML += textoItem;
    
    let btnApagar = document.createElement("button");
    btnApagar.textContent = "Apagar";

    let btnFim = document.createElement("button");
    btnFim.textContent = "Finalizar";
    
    btnFim.addEventListener("click", function() {
        finalizar(textoItem, novoItem);
    });

    btnApagar.addEventListener("click", function() {
        apagar(novoItem);
    });

    novoItem.appendChild(btnFim);
    novoItem.appendChild(btnApagar);

    pendentes.appendChild(novoItem);
    add.focus();
    add.value = "";
}

function finalizar(textoItem, itemPendente) {
    const novoItemFinalizado = document.createElement('li');
    novoItemFinalizado.innerHTML += textoItem;

    let btnApagarFinalizada = document.createElement("button");
    btnApagarFinalizada.textContent = "Apagar";
    
    btnApagarFinalizada.addEventListener("click", function() {
        apagarfinalizadas(novoItemFinalizado);
    });

    novoItemFinalizado.appendChild(btnApagarFinalizada);
    finalizadas.appendChild(novoItemFinalizado);

    pendentes.removeChild(itemPendente);
}

function apagar(itemPendente) {
    pendentes.removeChild(itemPendente);
}

function apagarfinalizadas(itemfinalizadas) {
    finalizadas.removeChild(itemfinalizadas);
}

add.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        adicionar();
    }
});
