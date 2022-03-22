const tarefas = [
    "Comprar comida",
    "Limpar a Casa",
]
const addTarefas = process.argv[2]
console.table(tarefas)

const novaTarefa = tarefas.push(addTarefas)

console.log(`A nova tarefa adicionada foi: ${addTarefas}`)
console.log('Nova lista de Tarefas:')
console.table(tarefas)
