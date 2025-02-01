import {RootState} from "../app/store.ts";
import {TasksState} from "../app/App.tsx";

export const selectTodolists = (state: RootState): TasksState => state.tasks