import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchData = createAsyncThunk("shopApi/fetchData",()=>{
    return axios.get("https://dummyjson.com/products")
    .then((response)=>response.data)
})

const initialState = {
    loading:false,
    post:[],
    error:null
} 

const shopApiSlice = createSlice({
    name:"shopApi",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.loading = false
            state.post = action.payload
            state.error = ""
        })
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.loading = false
            state.post = []
            state.error = action.payload
        })
    }
})

export default shopApiSlice.reducer;
