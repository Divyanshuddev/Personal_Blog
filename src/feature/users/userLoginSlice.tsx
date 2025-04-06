import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
    email: string;
    password: string;
}

type UserState = {
    userData: User | null;
    loading: boolean;
    error: string | null;
    snackbar: boolean;
    snackbarMessage: string | null;
    snackbarStatus: string | null;
}

const initialState: UserState = {
    userData: null,
    loading: false,
    error: null,
    snackbar: false,
    snackbarMessage: null,
    snackbarStatus: null,
}

export const userLogin = createAsyncThunk<User, User>('user/userLogin', async (data: User, { rejectWithValue }) => {
    try {
        const response = await axios.get(`http://localhost:3000/users?email=${data?.email}&password=${data?.password}`)
        if (response.data.length > 0) {
            return response.data[0];
        }
        else {
            return rejectWithValue('Invalid email or password')
        }
    } catch (error: any) {
        return rejectWithValue(error.response?.data || "Failed to login");
    }
});

const userLoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        resetSnackbar(state) {
            state.snackbar = false;
            state.snackbarMessage = null;
            state.snackbarStatus = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.userData = action.payload;
                state.error = null;
                state.snackbar = true;
                state.snackbarMessage = "Login Successfully";
                state.snackbarStatus = "success";
            })

            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false;
                state.userData = null;
                state.error = action.payload as string;
                state.snackbar = true;
                state.snackbarMessage = action.payload as string;
                state.snackbarStatus = "error";
            })
    }
});
export const { resetSnackbar } = userLoginSlice.actions;
export default userLoginSlice.reducer;