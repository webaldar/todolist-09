import type {Task, TasksState} from '../app/App.tsx'
import type {CreateTodolistAction, DeleteTodolistAction} from './todolists-reducer'
import {createReducer, nanoid} from "@reduxjs/toolkit";
import {createTodolistAC} from "./todolists-reducer";

const initialState: TasksState = {}

export const tasksReducer = createReducer(initialState, builder => {
  builder
      .addCase(createTodolistAC, (state, action) => {
        state[action.payload.id] = []
      })
      .addCase(deleteTodolistAC, (state, action) => {
        delete state[action.payload.id]
      })
})

export const deleteTaskAC = (payload: { todolistId: string, taskId: string }) => {
  return {type: 'delete_task', payload} as const
}

export const createTaskAC = (payload: { todolistId: string, title: string }) => {
  return {type: 'create_task', payload} as const
}

export const changeTaskStatusAC = (payload: { todolistId: string, taskId: string, isDone: boolean }) => {
  return {type: 'change_task_status', payload} as const
}

export const changeTaskTitleAC = (payload: { todolistId: string, taskId: string, title: string }) => {
  return {type: 'change_task_title', payload} as const
}

export type DeleteTaskAction = ReturnType<typeof deleteTaskAC>
export type CreateTaskAction = ReturnType<typeof createTaskAC>
export type ChangeTaskStatusAction = ReturnType<typeof changeTaskStatusAC>
export type ChangeTaskTitleAction = ReturnType<typeof changeTaskTitleAC>

type Actions =
    | DeleteTaskAction
    | CreateTaskAction
    | ChangeTaskStatusAction
    | ChangeTaskTitleAction
    | CreateTodolistAction
    | DeleteTodolistAction
