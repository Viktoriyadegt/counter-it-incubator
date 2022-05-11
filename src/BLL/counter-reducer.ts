import {StatusType} from "../App";

type ActionsType =
    CountIncACType
    | CountResetACType
    | ChangeStartValueACType
    | ChangeMaxValueACType
    | ChangeStatusACType
    | SetCountACType

export type InitialStateType = typeof initialState

export const initialState = {
    startValue: 0,
    maxValue: 5,
    count: 0,
    status: 'settings' as StatusType
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "COUNT-INC": {
            return {...state,  count: state.count + 1}
        }
        case "COUNT-RESET": {
            return {...state, count: action.startValue}
        }
        case "CHANGE-START-VALUE": {
            return {...state, startValue: action.startValue}
        }
        case "CHANGE-MAX-VALUE": {
            return {...state, maxValue: action.maxValue}
        }
        case "CHANGE-STATUS": {
            return {...state, status: action.status}
        }
        case "SET-COUNT": {
            return {...state, count: action.startValue}
        }


        default:
            return state
    }
}


type CountIncACType = ReturnType<typeof countIncAC>
export const countIncAC = () => {
    return {
        type: 'COUNT-INC'
    } as const
}


type CountResetACType = ReturnType<typeof countResetAC>
export const countResetAC = (startValue:number) => {
    debugger
    return {
        type: 'COUNT-RESET',
        startValue
    } as const
}

type ChangeStartValueACType = ReturnType<typeof changeStartValueAC>
export const changeStartValueAC = (startValue: number) => {
    return {
        type: 'CHANGE-START-VALUE',
        startValue
    } as const
}

type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>
export const changeMaxValueAC = (maxValue: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        maxValue
    } as const
}

type ChangeStatusACType = ReturnType<typeof changeStatusAC>
export const changeStatusAC = (status: StatusType) => {
    debugger
    return {
        type: 'CHANGE-STATUS',
        status
    } as const
}

type SetCountACType = ReturnType<typeof setCountAC>
export const setCountAC = (startValue: number) => {
    return {
        type: 'SET-COUNT',
        startValue
    } as const
}




