import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Count} from "./Count";
import {Settings} from "./Settings";

export type StatusType = 'setting' | 'error' | 'count';

function App() {

    let [maxValue, setMaxValue] = useState<number>(0);
    let [startValue, setStartValue] = useState<number>(0);
    let [count, setCount] = useState<number>(0);
    let [status, setStatus] = useState<StatusType>('setting');

    const getFromLocaleStorageHandler = () => {

        let valueStartAsString = localStorage.getItem('startValue')
        if (valueStartAsString) {
            let newStartValue = JSON.parse(valueStartAsString)
            setStartValue(newStartValue)
            setCount(newStartValue)
        }
        let valueMaxAsString = localStorage.getItem('maxValue')
        if (valueMaxAsString) {
            let newMaxValue = JSON.parse(valueMaxAsString)
            setMaxValue(newMaxValue)
        }
        let statusAsString = localStorage.getItem('status')
        if (statusAsString) {
            let newStatus = JSON.parse(statusAsString)
            setStatus(newStatus)
        }


    }
    useEffect(() => {
        getFromLocaleStorageHandler()
    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('status', JSON.stringify(status))
    }, [startValue, maxValue, status])

    const countInc = () => {
        setCount(count + 1)
    }

    const countReset = () => {
        setCount(startValue)
    }

    const changeStartValue = (startValue: number) => {
        setStartValue(startValue)
        setStatus('setting')
    }
    const changeMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
        setStatus('setting')
    }
    // debugger
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
                setCount={setCount}
                maxValue={maxValue}
                startValue={startValue}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                status={status}
                setStatus={setStatus}
            />
        </div>
    );
}

export default App;
