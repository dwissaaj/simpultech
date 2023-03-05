import {ChatProps} from "../../interfaces/ChatProps";
import * as React from 'react';
export const ChatDisplay = ({...props}: ChatProps) => {
    return (
        <div>
            <button className={'w-150 h-12 bg-black rounded border-4'}>
                {props.name}
            </button>
            <p className={'text-red-500'}>dsfdfs</p>
            <div className={'w-12 h-12 bg-black rounded border-black border-6 inline'}>

            </div>
        </div>
    )
}