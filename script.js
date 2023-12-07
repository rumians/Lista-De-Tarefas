let add = document.getElementById("descricao");
let pendentes = document.getElementById("tarefas");
let finalizadas = document.getElementById("finalizadas");
let valoradd = "";

function adicionar() {
    valoradd = add.value;
    const novoItem = document.createElement('li');
    //novoItem.innerHTML += `${valoradd} <button onclick="finalizar(this.parentElement)" >Finalizar</button>  <button onclick="Apagar(novoItem)">Apagar<button>`;
    const textoItem = valoradd;
    novoItem.innerHTML += textoItem;
    let btnFim = document.createElement("button");
    btnFim.textContent="Finalizar"
    btnFim.addEventListener("click", function() {
        finalizar(textoItem);
    })
    novoItem.appendChild(btnFim);
    //<button onclick="finalizar(this.parentElement)" >Finalizar</button>  <button onclick="Apagar(novoItem)" >Apagar</
    pendentes.appendChild(novoItem);
    add.focus();
    add.value = "";
}

function finalizar(itemdalista) {
    finalizadas.innerHTML += `<li> ${itemdalista} </li>`;
    // itemdalista.style.display = "none";
}

function Apagar(itemdalista) {
    itemdalista.style.display = "none";
}

add.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        adicionar();
    }
})