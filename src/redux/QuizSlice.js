import { createSlice } from "@reduxjs/toolkit";

const quizSlice=createSlice({
    name:"quiz",
    initialState:{
        rightAns:"thettu"
    },
    reducers:{
        OptionClick:(state)=>{
            state.rightAns="seri"
        }
    }
})