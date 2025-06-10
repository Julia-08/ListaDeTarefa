// definir constantes para uso no codigo
const btnadd = document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa');
const tasklist = document.getElementById('taksliste');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual o seu nome?");
titulo.innerHTML = `Lista de Tarefa: ${nome}`

btnadd.addEventListener("click", criaTarefa);

function criaTarefa(){
    
}
