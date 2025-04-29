import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {tasksReducer} from "../model/tasks-reducer.ts";
import {todolistsReducer} from "../model/todolists-reducer.ts";

const roorReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer,
})

export const store = configureStore({
    reducer: roorReducer
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ReturnType<typeof store.dispatch>

// @ts-ignore
window.store = store