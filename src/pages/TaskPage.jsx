import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
    const [searchParams] = useSearchParams()
    const title = searchParams.get('title');
    const description = searchParams.get('description');
    const navigate = useNavigate();
    function onBackClick() {
        navigate(-1)
    }
    return (
        <div className='w-full min-h-screen p-6 bg-slate-500'>
            <div className='w-125 space-y-4'>
                <div className="flex justify-center relative mb-6">
                    <button onClick={onBackClick} className="absolute left-0 top-0 bottom-0 text-slate-100">
                        <ChevronLeftIcon />
                    </button>
                    <h1 className='text-3xl font-bold text-center text-slate-100 mb-4'>Detalhes da Tarefa</h1>
                </div>
            </div>
            <div className="bg-slate-200 p-4 rounded-md">
                <h2 className="text-xl text-slate-600 font-bold mb-4">{title}</h2>
                <p className="text-xl text-slate-600">{description}</p>
            </div>
        </div>
    )
}

export default TaskPage;
