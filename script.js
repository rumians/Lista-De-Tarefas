let add = document.getElementById("descricao");
let pendentes = document.getElementById("tarefas");
let finalizadas = document.getElementById("finalizadas");
let btnApagar = '';
let valoradd = "";

function adicionar() {
    valoradd = add.value;
    const novoItem = document.createElement('li');
    const textoItem = valoradd;
    novoItem.innerHTML += textoItem;
    btnApagar = document.createElement("button");
    btnApagar.textContent="Apagar";
    let btnFim = document.createElement("button");
    btnFim.textContent="Finalizar";
    
    btnFim.addEventListener("click", function() {
        finalizar(textoItem);
        Apagar(textoItem);
    })

    novoItem.appendChild(btnFim);
    pendentes.appendChild(novoItem);
    add.focus();
    add.value = "";
}

function finalizar(itemdalista) {
    finalizadas.innerHTML += `<li> ${itemdalista} </li>`;
    
}

add.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        adicionar();
    }
})