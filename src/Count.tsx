import React from "react";
import {CountDisplay} from "./CountDisplay";
import {CountButton} from "./CountButton";
import {StatusType} from "./App";

type CountPropsType = {
    countInc: () => void
    countReset: () => void
    count: number
    maxValue: number
    minValue: number
    status: StatusType
}
export const Count = (props: CountPropsType) => {


    return (
        <div className='count'>
            <div className='display'>
                <CountDisplay
                    count={props.count}
                    maxValue={props.maxValue}
                    status={props.status}
                />
            </div>
            <div className='button-container'>
                <CountButton
                    countInc={props.countInc}
                    countReset={props.countReset}
                    count={props.count}
                    maxValue={props.maxValue}
                    minValue={props.minValue}
                    status={props.status}

                />
            </div>

        </div>
    );
};

