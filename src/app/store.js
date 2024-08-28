//to make store there are steps:-

// step1:- configureStore laine aavanu  
import { configureStore } from '@reduxjs/toolkit'

// after step4 :- export of the reduce list, import reducer here and then in configureStore give it as a key value pair in object form which is (reducer: todoReduce)
import todoReducer from '../features/todo/todoSlice'

// configureStore takes object most of the time
export const store = configureStore({
    reducer: todoReducer
})

//step2: to make reducers/Slicer/Slicing which is made inside src->feature->todo->todoSlice.js