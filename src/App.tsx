import React from 'react';
import './App.css';
import {Count} from "./Count";
import {Settings} from "./Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./BLL/store";
import {
    changeMaxValueAC,
    changeStartValueAC,
    changeStatusAC,
    countIncAC,
    countResetAC,
    InitialStateType
} from "./BLL/counter-reducer";

export type StatusType = 'setting' | 'error' | 'count';

function App() {

    const dispatch = useDispatch()
    const {startValue, maxValue, count, status} = useSelector<AppStateType, InitialStateType>(state => state.counter)


    const countInc = () => {
        dispatch(countIncAC())
    }

    const countReset = () => {
        dispatch(countResetAC(startValue))
    }

    const changeStartValue = (startValue: number) => {
        if(startValue < 0  || startValue >= maxValue){
            dispatch(changeStatusAC('error'))
            dispatch(changeStartValueAC(startValue))
        }else{
            dispatch(changeStartValueAC(startValue))
            dispatch(changeStatusAC('setting'))
        }


    }
    const changeMaxValue = (maxValue: number) => {
        if(startValue >= maxValue ||  startValue < 0){
            dispatch(changeStatusAC('error'))
            dispatch(changeMaxValueAC(maxValue))
        }else {
            dispatch(changeMaxValueAC(maxValue))
            dispatch(changeStatusAC('setting'))
        }
    }

    debugger
    return (
        <div className="App">
            <Count
                countInc={countInc}
                countReset={countReset}
                count={count}
                maxValue={maxValue}
                minValue={startValue}
                status={status}
            />
            <Settings
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
            />
        </div>
    );
}

export default App;
