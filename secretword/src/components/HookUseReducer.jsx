import { useReducer, useState } from "react";

// Define o componente funcional HookUseReducer
export const HookUseReducer = () => {

    // useReducer para gerar um número aleatório
	const [number, dispatch] = useReducer((state, action) => {
        // A função redutora simplesmente retorna um número aleatório
		return Math.random(state);
	});

    // Define o estado inicial das tarefas
	const initialTasks = [
		{ id: 1, text: "Fazer alguma coisa" },
		{ id: 2, text: "Fazer outra coisa" },
	];

    // Função redutora para manipular o estado das tarefas
	const taskReducer = (state, action) => {
		switch (action.type) {
			case "ADD":
                // Adiciona uma nova tarefa ao estado
				const newTask = {
					id: Math.random(),  // Gera um ID único para a tarefa
					text: taskText,
				};

				setTaskText("");  // Limpa o campo de texto

				return [...state, newTask];  // Retorna o novo estado com a tarefa adicionada

			case "REMOVE":
                // Remove a tarefa do estado filtrando pelo ID
				return state.filter((task) => task.id !== action.id);
			default:
				return state;  // Retorna o estado atual para ações não reconhecidas
		}
	};

    // useState para controlar o texto da nova tarefa
	const [taskText, setTaskText] = useState("");
    // useReducer para gerenciar o estado das tarefas
	const [tasks, dispatchTask] = useReducer(taskReducer, initialTasks);

    // Função para lidar com o envio do formulário
	const handleSubmit = (e) => {
		e.preventDefault();  // Previne o comportamento padrão do formulário
		dispatchTask({ type: "ADD" });  // Despacha a ação para adicionar uma nova tarefa
	};

    // Função para remover uma tarefa
	const removeTask = (id) => {
		dispatchTask({ type: "REMOVE", id: id });  // Despacha a ação para remover a tarefa pelo ID
	};

	return (
		<div>
			<h2>useReducer</h2>
			<p>Número: {number}</p>
			<button onClick={dispatch}>Alterar número!</button>  {/* Botão para alterar o número aleatório */}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={(e) => setTaskText(e.target.value)}  // Atualiza o estado do texto da tarefa
					value={taskText}  // Valor atual do texto da tarefa
				/>
				<input type="submit" value="Add" />  {/* Botão para adicionar a tarefa */}
			</form>
			<ul>
				{tasks.map((task) => (
					<li key={task.id} onDoubleClick={() => removeTask(task.id)}>  {/* Lista de tarefas, remove ao duplo clique */}
						{task.text}
					</li>
				))}
			</ul>
			<hr />
		</div>
	);
};

// Exporta o componente
export default HookUseReducer;
