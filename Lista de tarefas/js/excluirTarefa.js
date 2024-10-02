import { verificarListaVazia, verificarTarefasRealizadas } from "./criarTarefa.js";

const listaTarefas = document.getElementById("lista");
const listaTarefasRealizadas = document.getElementById("lista-realizado");

const excluirTarefa = (elemento) => {
    let confirmacao = confirm("Tem certeza de que deseja excluir essa tarefa ?");

    if(confirmacao){
        elemento.remove();

        verificarListaVazia(listaTarefas);
        verificarTarefasRealizadas(listaTarefasRealizadas);

    }
}

export { excluirTarefa };