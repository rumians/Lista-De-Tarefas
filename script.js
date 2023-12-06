let add = document.getElementById("descricao");
let pendentes = document.getElementById("tarefas");
let finalizadas = document.getElementById("finalizadas");
let valoradd = "";


add.addEventListener("change", function () {
    valoradd = add.value;
})

function adicionar() {
    const novoItem = document.createElement('li');
    novoItem.innerHTML += `${valoradd} <button onclick="finalizar(this.parentElement)" >Finalizar</button>  <button onclick="Apagar(this.parentElement)" >Apagar</button>`;
    pendentes.appendChild(novoItem);
}

function finalizar(itemdalista) {
    finalizadas.innerHTML += `<li> ${valoradd} </li>`;
    itemdalista.style.display = "none";
}

function Apagar(itemdalista) {
    itemdalista.style.display = "none";
}
