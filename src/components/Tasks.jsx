import { CheckIcon, ChevronRight, TrashIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function Tasks(props) {
    const navigate = useNavigate();
    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set('title', task.title);
        query.set('description', task.description);
        navigate(`/task?${query.toString()}`);
    }

    return (
        <ul className="space-y-4 p-6 rounded-md bg-slate-200 shadow">{props.tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
                <button onClick={() => { props.onClikTask(task.id) }} className={`flex items-center gap-2 w-full bg-slate-400 text-white rounded-md p-2 text-left ${task.isCompleted && 'line-through'}`}>
                    {task.isCompleted && <CheckIcon />}
                    {task.title}
                </button>
                <Button onClick={() => {
                    onSeeDetailsClick(task)
                }}>
                    <ChevronRight />
                </Button>
                <Button onClick={() => props.deleteTask(task.id)}>
                    <TrashIcon />
                </Button>
            </li>
        ))}</ul>
    )
}

export default Tasks;
