import { criarTarefa, verificarListaVazia} from "./criarTarefa.js";


const item = document.getElementById("input-item");
const listaTarefas = document.getElementById("lista");

export function adicionarTarefa(evento) {
    evento.preventDefault(); 

    if (item.value === ""){
        alert("Campo vazio. Por favor, digite uma tarefa");
        return;
    }

    const tarefas = criarTarefa(item.value);
    listaTarefas.appendChild(tarefas);
    verificarListaVazia(listaTarefas);
    item.value = "";

}