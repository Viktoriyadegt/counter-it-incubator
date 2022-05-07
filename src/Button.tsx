import React from 'react';


export type ButtonType = {
    name: string
    callback: () => void
    disabled: boolean
}
export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callback()
    }
    return (
        <div>
            <button onClick={onClickHandler} disabled={props.disabled}>{props.name}</button>
        </div>
    );
};

