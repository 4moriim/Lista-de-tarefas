import { adicionarTarefa } from "./js/adicionarTarefa.js";
import { verificarTarefasRealizadas } from "./js/criarTarefa.js";

const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarTarefa);

const listaTarefasRealizadas = document.getElementById("lista-realizado");
verificarTarefasRealizadas(listaTarefasRealizadas);