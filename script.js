let add = document.getElementById("descricao");
let pendentes = document.getElementById("tarefas");
let finalizadas = document.getElementById("finalizadas");
let blud = ""


add.addEventListener("change", function () {
    blud = add.value;
})

function adicionar() {
    pendentes.innerHTML += `<li> ${blud} <button onclick="finalizar()" >Finalizar</button> </li> `;
}

function finalizar() {
    finalizadas.innerHTML += `<li> ${blud} </li>`;
    pendentes.
}