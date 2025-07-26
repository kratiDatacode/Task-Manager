import { configurestore } from "@reduxjs/toolkit";
import taskReducer from '../features/task/taskSlice'

export const store =configurestore(
    {
        reducer:{
            task : taskReducer
        }
    }
)