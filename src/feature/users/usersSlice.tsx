import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type User={
    firstName:string;
    lastName:string;
    email:string;
    password:string;
}

type UserState={
    users:User[];
    loading:boolean;
    error:string | null;
    snackbar:boolean;
    snackbarMessage:string | null;
    snackbarStatus:string | null;
}

const initialState: UserState={
    users:[],
    loading:false,
    error:null,
    snackbar:false,
    snackbarMessage:null,
    snackbarStatus:null,
}

export const createUser=createAsyncThunk('users/createUser',async(data:User,{rejectWithValue})=>{
    try{
        const duplicateCheck = await axios.get(`http://localhost:3000/users?email=${data?.email}`)
        if (duplicateCheck.data.length>0)
        {
          console.log("User already has an account");
        return rejectWithValue("User already exists");
        }
        const response = await axios.post('http://localhost:3000/users',data)
        return response.data;
    }catch(error:any){
        return rejectWithValue(error.response?.data || "Failed to create user")
    }
}
);
const userSlice = createSlice({
    name: "createUser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(createUser.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.snackbar=false;
        })
        .addCase(createUser.fulfilled, (state, action: PayloadAction<User>) => {
          state.loading = false;
          state.users.push(action.payload);
          state.snackbar=true;
          state.snackbarMessage="Account Created Successfully"
          state.snackbarStatus="success"
        })
        .addCase(createUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
          state.snackbar=true;
          state.snackbarMessage=action.payload as string;
          state.snackbarStatus="error";
        });
    },
  });
  
export default userSlice.reducer;