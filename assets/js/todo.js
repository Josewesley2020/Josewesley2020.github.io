import { addTask, getAllTasks } from "../js/utils/domFuctions.js";


//Banco de Dados NoSQL - Orientado a Documento


const db = [
    {
        id: 1,
        title: 'Concluir App Conexão Arte',
        steps: [
            {step: 'Ajustar textos'},        
            {step: 'Trocar imagens para publicas'},        
            {step: 'Publicar no Expo'},        
            {step: 'Publicar no Expo Store Connect'},        
        ],
        done: false,
        dueDate: "2022-05-06",
        reminder: "2022-05-02 10:00",
    },
    {
        id: 2,
        title: 'Aula 4 Fiap - Avanade',
        steps: [
            {step: 'Ajustar textos'},        
            {step: 'Trocar imagens para publicas'},        
            {step: 'Publicar no Expo'},        
            {step: 'Publicar no Expo Store Connect'},        
        ],
        done: false,
        dueDate: "2022-05-06",
        reminder: "2022-05-02 10:00",
    },

];

getAllTasks(db);

//console.log(db[0].title);

// DOM 
const newTask = document.querySelector('#inputTxtNewTask');
const form = document.querySelector('#addNewTask');
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

newTask.addEventListener("keyup", (e) => { 
    console.log("Keyup")
    e.preventDefault();
    e.stopPropagation();
    if(e.key == "Enter") {
        if (!newTask.value) {
            alert("INPUT VAZIO - Digite nova tarefa!")
        } else{
            alert(newTask.value);

            const d = new Date();
            const today = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

            db.push({id: Number(db.length) + 1, 
            title: newTask.value, done: false,
            dueDate: today,
        });

            newTask.value = "";
            console.log(db);
        }
    }
});



// -----------------//

//Criando um objeto literal
//JavaScript Object Natation - JOSON

// const frutas = ["maça","banana","laranja"];

// console.log(frutas.at(-1));

// const dados = {
//     nome: "Jose Wesley",
//     idade: 28,
//     programador: true,
//     acao: () => {
//         console.log("Executando uma ação!");
//     },
// };




