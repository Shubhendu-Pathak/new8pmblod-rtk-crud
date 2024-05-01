// below are  action for get post delete put

import { createAsyncThunk } from "@reduxjs/toolkit";

// get action

export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    let response = await fetch(`http://localhost:4000/users`);

    try {
      let result = await response.json();
    //   console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// post action

export const createUser = createAsyncThunk(
  'createuser', async(data,{rejectWithValue})=>{
    const response = await fetch(`http://localhost:4000/users`,{method:'POST',headers:{"Content-Type":"application/json"},body:JSON.stringify(data)})
    try {
      let result = await response.json();
      return result
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

// delete action

export const deleteUser = createAsyncThunk(
  'deleteuser',async(data,{rejectWithValue})=>{
    const response = await fetch(`http://localhost:4000/users/${data.id}`,{method:'DELETE'});
    try {
      let result = await response.json()
      return result
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

//patch

export const updateUser = createAsyncThunk(
  'updateuser',async(data,{rejectWithValue})=>{
    const response = await fetch(`http://localhost:4000/users/${data.id}`,{method:'PUT',body:JSON.stringify(data)});
    try {
      let result = await response.json()
      return result
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)