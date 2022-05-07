import React, {ChangeEvent} from 'react';
import {Button} from "./Button";
import {StatusType} from "./App";

export type SettingsType = {
    setCount: (startValue: number) => void
    maxValue: number
    startValue: number
    changeStartValue: (value: number) => void
    changeMaxValue: (value: number) => void
    status: StatusType
    setStatus: (status: StatusType) => void
}

export const Settings = (props: SettingsType) => {

    if (props.startValue < 0 || props.maxValue <= props.startValue) {
        props.setStatus("error")
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(JSON.parse(e.currentTarget.value))
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(JSON.parse(e.currentTarget.value))
    }

    const onChangeButtonHandler = () => {
        props.setStatus('count')
        props.setCount(props.startValue)
    }
    return (
        <div className='count'>
            <div className={'display'}>
                <div className={'settings'}>max value
                    <input type={"number"}
                           value={props.maxValue}
                           onChange={onChangeMaxValueHandler}
                           className={props.status === 'error' ? 'error' : 'input'}/>
                </div>
                <div className={'settings'}>start value
                    <input type={"number"}
                           value={props.startValue}
                           onChange={onChangeStartValueHandler}
                           className={props.status === 'error' ? 'error' : 'input'}/>
                </div>

            </div>
            <div className='button-container'>
                <Button name={'set'} callback={onChangeButtonHandler} disabled={props.status !== 'setting'}/>
            </div>

        </div>
    );
};

