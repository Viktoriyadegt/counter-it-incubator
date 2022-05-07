import React from "react";
import {Button} from "./Button";
import {StatusType} from "./App";

type CountButtonPropsType = {
    countInc: () => void
    countReset: () => void
    count: number
    maxValue: number
    minValue: number
    status: StatusType

}
export const CountButton = (props: CountButtonPropsType) => {

    return (
        <>
            <Button name={'INC'} callback={props.countInc}
                    disabled={props.count === props.maxValue || props.status !== 'count'}/>
            <Button name={'RESET'} callback={props.countReset}
                    disabled={props.count === props.minValue || props.status !== 'count'}/>
        </>
    );
};

