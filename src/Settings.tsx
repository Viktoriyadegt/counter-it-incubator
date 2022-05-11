import React, {ChangeEvent} from 'react';
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {changeStatusAC, InitialStateType, setCountAC} from "./BLL/counter-reducer";
import {AppStateType} from "./BLL/store";

export type SettingsType = {
    changeStartValue: (value: number) => void
    changeMaxValue: (value: number) => void
}

export const Settings = (props: SettingsType) => {
    const dispatch = useDispatch()
    const {startValue, maxValue, status} = useSelector<AppStateType, InitialStateType>(state => state.counter)

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        props.changeMaxValue(+e.currentTarget.value)
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        props.changeStartValue(+e.currentTarget.value)

    }

    const onChangeButtonHandler = () => {
        debugger
        dispatch(changeStatusAC('count'))
        dispatch(setCountAC(startValue))
    }
    debugger
    return (
        <div className='count'>
            <div className={'display'}>
                <div className={'settings'}>max value
                    <input type={"number"}
                           value={maxValue}
                           onChange={onChangeMaxValueHandler}
                           className={status === 'error' ? 'error' : 'input'}/>
                </div>
                <div className={'settings'}>start value
                    <input type={"number"}
                           value={startValue}
                           onChange={onChangeStartValueHandler}
                           className={status === 'error'? 'error' : 'input'}/>
                </div>

            </div>
            <div className='button-container'>
                <Button name={'set'} callback={onChangeButtonHandler} disabled={status !== 'setting'}/>
            </div>

        </div>
    );
};

