import React from "react";
import {StatusType} from "./App";
import style from './CountDisplay.module.css'

type CountDisplayPropsType = {
    count: number
    maxValue: number
    status: StatusType

}
export const CountDisplay = (props: CountDisplayPropsType) => {

    return (
        (props.status === 'count')
            ? <>
                <div className={props.count === props.maxValue ? 'error-message' : ''}>{props.count}</div>
            </>
            :
            (props.status === 'setting')
                ?
                <>
                    <div className={style.set}>Enter values and press "SET"</div>
                </>
                :
                <>
                    <div className={style.error}>Incorrect value!</div>
                </>
    );
};

