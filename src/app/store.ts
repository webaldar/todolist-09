import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {tasksReducer} from "../model/tasks-reducer.ts";
import {todolistsReducer} from "../model/todolists-reducer.ts";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer,
})

export const store = configureStore({
    reducer: rootReducer
})

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store