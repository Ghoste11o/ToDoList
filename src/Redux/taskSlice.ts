import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ItodoTask {
  id: number | string;
  text: string;
  date: string;
  time: string;
  isDone: boolean;
};

const initialState: ItodoTask[] = JSON.parse(localStorage.getItem("tasks") || "[]");

export const taskSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<{ text: string, date: string, time: string }>) => {
      const { text, date, time } = action.payload;
      const newTask: ItodoTask = {
        id: state.length + 1,
        text,
        date,
        time,
        isDone: false,
      };
      const newState = [...state, newTask];
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },
    updateTasks: (state, action: PayloadAction<ItodoTask[]>) => {
      const updatedState = action.payload;
      localStorage.setItem("tasks", JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addNewTask, updateTasks } = taskSlice.actions;
export default taskSlice.reducer;