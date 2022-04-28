//SOLID
//Principio de boas praticas de programação
// S - SRP - Single Responsability Principle
// Principio de responsabilidade
//Funções bem escritas, devem ser mantidas simples, curtas e realizando um objetivo
//quando precisamos acessar uma função em outro arquivo, é necessario exporta-la
//CRUD

export function addTask(){
    alert("Cadastrando nova tarefa");
}
export function removeTask(){
    alert("Removendo tarefa")
}
export function updateTask(){
    alert("Alterando tarefa")
}
export function getAllTask(){
    alert("listando todas tarefa")
}
export function getTaskById(){
    alert("selecionando tarefa")
}




//quando for importar do arquivo domFunctions. o JS não sabe quantas funções estão disponiveis
//Quando eu preciso extrair qualquer recurso, usando a desestruturação. Destructuring
//import { addTask } from "../utils";
