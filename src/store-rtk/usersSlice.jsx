import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, showUser, updateUser } from "./thunk/fetchUsers";


const userSlice = createSlice({
    name:'users',
    initialState:{
        isLoading:false,
        data:null,
        error:null,
        searchData:[]
    },
    reducers:{
        searchData:(state,action)=>{
            console.log(action.payload);
            state.searchData = action.payload;
        }
    },
    extraReducers(builder){

// get 
builder.addCase(showUser.pending,(state,action)=>{
    state.isLoading = true
}),
builder.addCase(showUser.fulfilled,(state,action)=>{
    state.isLoading = false
    state.data = action.payload
}),
builder.addCase(showUser.rejected,(state,action)=>{
    state.isLoading = false
    state.error = action.error.message
}),
// post
builder.addCase(createUser.pending,(state,action)=>{
    state.isLoading = true
}),
builder.addCase(createUser.fulfilled,(state,action)=>{
    state.isLoading = false
 state.data &&  state.data.push(action.payload)
}),
builder.addCase(createUser.rejected,(state,action)=>{
    state.isLoading = false
    state.error = action.error.message
}),
// delete
builder.addCase(deleteUser.pending,(state,action)=>{
    state.isLoading = true
}),
builder.addCase(deleteUser.fulfilled,(state,action)=>{
    state.isLoading = false
    const {id} = action.payload
    if(id){
        state.data = state.data.filter(ele =>ele.id != id)
    }
}),
builder.addCase(deleteUser.rejected,(state,action)=>{
    state.isLoading = false
    state.error = action.error.message
}),
// update
builder.addCase(updateUser.pending,(state,action)=>{
    state.isLoading = true
}),
builder.addCase(updateUser.fulfilled,(state,action)=>{
    state.isLoading = false
   state.data = state.data.map(ele=>{
    return ele.id == action.payload.id ? action.payload : ele
   })
}),
builder.addCase(updateUser.rejected,(state,action)=>{
    state.isLoading = false
    state.error = action.error.message
})

    }
})

export const usersReducer = userSlice.reducer
export const {searchData} = userSlice.actions