//SOLID
//Principio de boas praticas de programação
// S - SRP - Single Responsability Principle
// Principio de responsabilidade
//Funções bem escritas, devem ser mantidas simples, curtas e realizando um objetivo
//quando precisamos acessar uma função em outro arquivo, é necessario exporta-la
//CRUD

export function addTask(db, title=""){
// criando uma nova tarefa
const task = document.createElement('div');
// const id = Number(db.length) + 1;
task.classList.add('task');
task.setAttribute('id', db.id);


const taskBody  = `
<div><input type="checkbox" id="check_${db.id}"/></div>
    <div>
        <div> <span class="title-task">${title?title:db.title}</span></div>
       
   </div>
   <div>Star</div>
   `;

   task.innerHTML = taskBody;
   document.querySelector(".tasks").appendChild(task);
}
export function removeTask(){
    alert("Removendo tarefa")
}
export function updateTask(){
    alert("Alterando tarefa")
}
export function getAllTasks(db){
    db.forEach((item) => {
        addTask(item);
     });
}

export function getTaskById(){
    alert("selecionando tarefa")
}




//quando for importar do arquivo domFunctions. o JS não sabe quantas funções estão disponiveis
//Quando eu preciso extrair qualquer recurso, usando a desestruturação. Destructuring
//import { addTask } from "../utils";
