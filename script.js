let add = document.getElementById("descricao");
let pendentes = document.getElementById("tarefas");
let finalizadas = document.getElementById("finalizadas");
let blud = "";


add.addEventListener("change", function () {
    blud = add.value;
})

function adicionar() {
    const novoItem = document.createElement('li');
    novoItem.innerHTML += `${blud} <button onclick="finalizar(this.parentElement)" >Finalizar</button>`;
    pendentes.appendChild(novoItem);
}

function finalizar(itemdalista) {
    finalizadas.innerHTML += `<li> ${blud} </li>`;
    itemdalista.style.display = "none";
}



