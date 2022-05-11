import {combineReducers, createStore} from "redux";
import {loadState, saveState} from "./utils/localstorage-utils";
import {counterReducer} from "./counter-reducer";



const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store