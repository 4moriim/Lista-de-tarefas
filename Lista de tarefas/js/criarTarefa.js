import { editarTarefa } from "./editarTarefa.js";
import { excluirTarefa } from "./excluirTarefa.js";


const listaTarefas = document.getElementById("lista");
const listaTarefasRealizadas = document.getElementById("lista-realizado");
const containerTarefasRealizadas = document.getElementById("container-lista-realizado");
const mensagemListavazia = document.getElementById("mensagem-lista-vazia");

let contador = 0; 

export function criarTarefa (item) {
    const tarefas = document.createElement("li"); 
    const containerItemTarefa = document.createElement("div"); 
    containerItemTarefa.classList.add("lista-item-container"); 

    const containerNomedaTarefa = document.createElement("div");
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");

    const checkboxInput = document.createElement("input"); 
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("input-checkbox");
    checkboxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", (evento) => {
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo")
        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaTarefasRealizadas.appendChild(tarefas);
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaTarefas.appendChild(tarefas);
        }

        verificarTarefasRealizadas(listaTarefasRealizadas);
    });

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomedaTarefa.appendChild(containerCheckbox);

    const nomeDaTarefa = document.createElement("p");
    nomeDaTarefa.id = "item-titulo";
    nomeDaTarefa.innerText = item;
    containerNomedaTarefa.appendChild(nomeDaTarefa);

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("tarefa-lista-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.addEventListener("click", function (){
        excluirTarefa(tarefas);
    });

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button")

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.addEventListener("click", function() {
        editarTarefa(tarefas);
    });

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemTarefa.appendChild(containerNomedaTarefa);
    containerItemTarefa.appendChild(containerBotoes);
    
    tarefas.appendChild(containerItemTarefa);

    return tarefas;
}

export function verificarTarefasRealizadas(lista){
    containerTarefasRealizadas.style.display = lista.childElementCount === 0 ? "none" : "block";
}

export function verificarListaVazia() {
    if(lista.querySelectorAll("li").length === 0){
        mensagemListavazia.style.display = "block";
    }else {
        mensagemListavazia.style.display = "none";
    }
}

export const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza de que deseja excluir esse item ?");

    if (confirmacao){
        elemento.remove();

        verificarListaVazia(listaTarefas);
        verificarListaComprados(listaTarefasRealizadas);
    }
}