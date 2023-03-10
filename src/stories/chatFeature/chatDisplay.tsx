import * as React from 'react';
import { ReactComponent as Navigate } from "../assets/navi.svg";
import {Task} from "../task/task";
import {useQuery} from "react-query";
import { fetchTask} from "../../api/api";
import {TaskProps} from "../../interfaces/TaskInterface";


export const ChatDisplay = () => {
    const { isLoading, data, isError} = useQuery('task',fetchTask)

    if (isLoading) {
        return <p>Loading</p>
    }
    if (isError) {
        return <p>Error</p>
    }
    console.log(data)
    return (
        <div className={'w-96 h-96 overflow-scroll scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-900 scrollbar-rounded-xl'}>
            <div className={'grid grid-rows-2'}>
                <div className={'flex flex-cols items-center justify-between ml-4 mr-4 mt-4'}>
                    <div className={'flex items-center p-2 border-2 rounded border-neutral-500 '}>
                        <button className={'font-inter text-base  '}>My Tasks</button>
                        <button>
                            <Navigate />
                        </button>
                    </div>
                        <button className={'font-inter text-base text-white p-2 rounded border-2 border-sky-600 bg-sky-600 justify-self-end'}>
                            New Task
                        </button>

                </div>
            </div>
            <div className={'m-4'}>
                {data?.data.map((tasks: TaskProps) => {
                    return (
                        <Task  state={tasks.state} titleTask={tasks.titleTask} timeTask={tasks.timeTask} descriptionTask={tasks.descriptionTask} />
                    )
                })}
            </div>
        </div>
    )
}