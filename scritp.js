// definir constantes para uso no codigo
const btnAdd = document.getElementById('btnAdd');
const tarefa = document.getElementById('tarefa');
const tasklist = document.getElementById('tasklist');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual o seu nome?");
titulo.innerHTML = `Lista de Tarefa: ${nome}`
tarefa.focus();

btnAdd.addEventListener("click",criaTarefa);

function criaTarefa(){
    if (tarefa.value ==""){
        alert("digite sua tarefa")
    }
    else{
    const listItem = document.createElement('li')
    listItem.textContent = tarefa.value;
    tasklist.appendChild(listItem);

    const removeButton = document.createElement('button');
    removeButton.id = "remove"
    removeButton.textContent = "X"

    removeButton.addEventListener("click", function(){
        tasklist.removeChild(listItem);
    })

    const concluirButton = document.createElement('button');
    concluirButton.id = "conclui"
    concluirButton.textContent = "✓"

    let buttonsItem = document.createElement('div');
    buttonsItem.classList.toggle('buttonsItem')
    listItem.appendChild(buttonsItem);
    buttonsItem.appendChild(concluirButton);
    buttonsItem.appendChild(removeButton);
    
    concluirButton.addEventListener("click", function(){
        listItem.classList.toggle('completed');
    })
    tarefa.value = '';
    tarefa.focus(); // Retorna o foco para o campo de entrada
}}
tarefa.addEventListener('keypress', function(e){
    if (e.key === 'Enter') criaTarefa();
})
