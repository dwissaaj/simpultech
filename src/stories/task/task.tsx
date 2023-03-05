// @flow
import * as React from 'react';
import dateFormat from "dateformat";
import { ReactComponent as More } from "../assets/more.svg";
import { ReactComponent as Navigate } from "../assets/navi.svg";
import { ReactComponent as Clock} from "../assets/clock.svg";
import { ReactComponent as Edit} from "../assets/edit.svg";
import {useState} from "react";
import {TaskProps} from "../../interfaces/TaskInterface";



export const Task = ({...props}: TaskProps) => {
    const [dropOpen, setdropOpen] = useState(false)
    //inactive style
        if (!props.state) {
            return (
                <div className={'grid grid-rows-3 border-b-2 border-gray-300'}>
                    <div className={'grid grid-cols-3 flex items-start content-center'}>
                        <div className={'flex flex-cols gap-3'}>
                            <input checked={true} type={"checkbox"} id={'checklist'} name={"checked"}/>
                            <p className={'font-inter font-semibold text-slate-300 text-sm line-through '}>{props.titleTask}</p>
                        </div>
                        <div className={'flex flex-cols gap-3'}>
                            <p className={'font-inter text-xs'}>{dateFormat(props.timeTask,'paddedShortDate')}</p>
                        </div>
                        <div className={'flex flex-cols gap-3'}>
                            <button onClick={() => setdropOpen(!dropOpen)}>
                                <Navigate />
                            </button>
                            <button>
                                <More />
                            </button>
                        </div>
                    </div>
                    {dropOpen ?
                        <>
                            <div className={'mt-2 ml-4 flex flex-cols gap-4  items-center'}>
                            <Clock />
                            <input className={'border-2 rounded p-1'} type={"date"}/>
                            </div>
                            <div className={'mt-2 ml-4 flex flex-cols gap-4  items-center'}>
                            <button>
                            <Edit />
                            </button>
                            <p className={'font-inter text-xs text-slate-300'}>{props.descriptionTask}</p>
                            </div>
                        </>
                :
                null }
                </div>
            )
        }
       else {
           return (
               <div className={'grid grid-rows-3 '}>
                   <div className={'grid grid-cols-3 flex items-start content-center'}>
                       <div className={'flex flex-cols gap-3 '}>
                           <input type={"checkbox"} id={'checklist'} name={"checked"}/>
                           <p className={'font-inter font-semibold text-slate-700 text-sm'}>{props.titleTask}</p>
                       </div>
                       <div className={'flex flex-cols gap-3'}>
                           <p className={'font-inter text-red-500 text-xs'}>{props.daysTask}</p>
                           <p className={'font-inter text-xs'}>{dateFormat(props.timeTask,'paddedShortDate')}</p>
                       </div>
                       <div className={'flex flex-cols gap-3'}>
                           <button onClick={() => setdropOpen(!dropOpen)}>
                               <Navigate />
                           </button>
                           <button>
                               <More />
                           </button>
                       </div>
                   </div>
                   {dropOpen ?
                   <>
                       <div className={'mt-2 ml-4 flex flex-cols gap-4 items-center '}>
                           <Clock />
                           <input className={'border-2 rounded p-1'} type={"date"}/>
                       </div>
                       <div className={'mt-2 ml-4 flex flex-cols gap-4  items-center'}>
                           <button>
                               <Edit />
                           </button>
                           <p className={'font-inter text-xs '}>{props.descriptionTask}</p>
                       </div>
                   </>
                   :
                   null

                   }
               </div>
           )
        }
}