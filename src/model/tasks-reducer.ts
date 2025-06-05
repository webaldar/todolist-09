import type {TasksState} from '../app/App.tsx'
import {createTodolistAC, deleteTodolistAC} from "./todolists-reducer";
import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState: TasksState = {}

export const tasksReducer = createReducer(initialState, builder => {
  builder
      .addCase(deleteTaskAC, (state, action) => {
          const tasks = state[action.payload.todolistId]
          const index = tasks.findIndex(task => task.id === action.payload.taskId)
          if(index !== -1) {
              tasks.splice(index, 1)
          }
      })
      .addCase(createTodolistAC, (state, action) => {
        state[action.payload.id] = []
      })
      .addCase(deleteTodolistAC , (state, action) => {
        delete state[action.payload.id]
      })
})

export const deleteTaskAC = createAction<{ todolistId: string, taskId: string }>('tasks/deleteTask')
export const createTaskAC = createAction<{todolistId: string, title: string}>('tasks/createTask')
export const changeTaskStatusAC = createAction<{ todolistId: string, taskId: string, isDone: boolean }>('tasks/changeTaskStatus')
export const changeTaskTitleAC = createAction<{ todolistId: string, taskId: string, title: string }>('tasks/changeTaskTitle')

// export type DeleteTaskAction = ReturnType<typeof deleteTaskAC>
// export type CreateTaskAction = ReturnType<typeof createTaskAC>
// export type ChangeTaskStatusAction = ReturnType<typeof changeTaskStatusAC>
// export type ChangeTaskTitleAction = ReturnType<typeof changeTaskTitleAC>

