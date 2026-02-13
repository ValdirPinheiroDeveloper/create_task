import { useState } from "react";

function AddTask({ onAddTaskClick }) {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    return (
        <div className="space-y-4 p-6 rounded-md bg-slate-200 shadow flex flex-col">
            <input type="text" placeholder="Digite a Tarefa" className="border border-slate-300 px-4 py-2 rounded-md" value={title} onChange={(event) => setTitle(event.target.value)} />
            <input type="text" placeholder="Descrição da Tarefa" className="border border-slate-300 px-4 py-2 rounded-md" value={description} onChange={(event) => setDescription(event.target.value)} />
            <button onClick={() => {
                if (!title.trim() || !description.trim()) { return alert("Preencha o Titulo e Descrição da Tarefa") }
                onAddTaskClick(title, description);
                setTitle('');
                setDescription('');
            }} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
        </div>
    )
}

export default AddTask;
