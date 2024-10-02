export const editarTarefa = (elemento) => {
    let novaTarefa = prompt("Digite o novo nome da tarefa: ");

    if(novaTarefa !== null && novaTarefa.trim() !== ""){
        const tarefaTextoAtualizado = elemento.querySelector("#item-titulo");
        tarefaTextoAtualizado.textContent = novaTarefa;

        const tarefaRealizada = document.querySelector(".input-checkbox").checked;

        if (tarefaRealizada) {
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            tarefaTextoAtualizado.style.textDecoration = "line-through";
        } else {
            elemento.querySelector(".input-checkbox").checked = false;
            elemento.querySelector(".checkbox-customizado").classList.remove("checked");
            tarefaTextoAtualizado.style.textDecoration = "none";
        }
    }
}