import { Box, Button, CircularProgress, Grid2, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../app/store';
import { createUser } from "../feature/users/usersSlice";
import { RootState } from '../app/store';
import SnackBar from '../components/SnackBar';
import { useEffect } from 'react';
const styles = {
    root: {
        width: "100vw",
        height: "100vh",
    },
    signUpBox: {
        boxSizing: "border-box",
        padding: "2rem",
        border: "1px solid gray",
        borderRadius: "0.4rem",
        width: "60%",
        boxShadow: "1px 1px 10px black"
    },
    signUpTitle: {
        fontSize: "2rem",
        fontWeight: "bold"
    },
    textField: {
        "& .MuiOutlinedInput-root": {
            color: "white",
            fontFamily: "Arial",
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
                borderWidth: "2px",
            },
            "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    borderWidth: "3px",
                },
            },
            "&:hover:not(.Mui-focused)": {
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ccc",
                    color: "white"
                },
            },
            "& .MuiInputLabel-outlined": {
                color: "white",
                fontWeight: "bold",
                "&.Mui-focused": {
                    color: "white",
                    fontWeight: "bold",
                },
            },
        },
    }
}

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string
}
const SignUp = () => {
    const form = useForm<FormValues>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    });
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector((state: RootState) => state.users.loading);
    const snackbar = useSelector((state:RootState)=> state.users.snackbar);
    const snackBarMessage = useSelector((state:RootState)=> state.users.snackbarMessage);
    const snackBarStatus = useSelector((state:RootState)=> state.users.snackbarStatus);
    const navigate =useNavigate();
    const onSubmit = (data: FormValues) => {
        dispatch(createUser(data))
    }
    useEffect(() => {
        let timeoutId: number;
    
        if (snackBarStatus === 'success') {
          timeoutId = setTimeout(() => {
            navigate('/login'); 
          }, 3000);
        }
    
        return () => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
        };
      }, [snackBarStatus, navigate]);
    
    return (
        <Stack sx={styles.root} justifyContent={'center'} alignItems={'center'}>
            {
                loading ? (
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Stack sx={styles.signUpBox} direction={'column'} spacing={3} >
                        <Typography sx={styles.signUpTitle}>Sign Up</Typography>
                        <Grid2 container spacing={2}>
                            <Grid2 size={{ lg: 6, md: 12, sm: 12 }} >
                                <TextField sx={styles.textField} slotProps={{ inputLabel: { style: { color: "white" } } }} variant='outlined' label={'First Name'} id="outlined-basic" fullWidth type='text' {...register("firstName", {
                                    required: "First Name is required"
                                })} error={!!errors.firstName} helperText={errors.firstName?.message} />
                            </Grid2>
                            <Grid2 size={{ lg: 6, md: 12, sm: 12 }}>
                                <TextField sx={styles.textField} slotProps={{ inputLabel: { style: { color: "white" } } }} variant='outlined' label={'Last Name'} fullWidth type='text' {...register('lastName', {
                                    required: "Last name is required"
                                })} error={!!errors.lastName} helperText={errors.lastName?.message} />
                            </Grid2>
                            <Grid2 size={12}>
                                <TextField sx={styles.textField} slotProps={{ inputLabel: { style: { color: "white" } } }}  variant='outlined' label={'Email'} fullWidth type='email' {...register('email', {
                                    required: "Email is required"
                                })} error={!!errors.email} helperText={errors.email?.message} />
                            </Grid2>
                            <Grid2 size={12}>
                                <TextField sx={styles.textField} slotProps={{ inputLabel: { style: { color: "white" } } }} variant='outlined' label={'Password'} fullWidth type='password' {...register('password', {
                                    required: "password is required"
                                })} error={!!errors.password} helperText={errors.password?.message} />
                            </Grid2>
                        </Grid2>
                        <Button variant='contained' onClick={handleSubmit(onSubmit)}  >Sign Up</Button>
                        <Stack alignItems={'center'} >
                            <Link to={'/login'}>Login</Link>
                        </Stack>
                    </Stack>
                )
            }
            {
            snackbar&&
            <SnackBar openSnackBar={snackbar} snackBarMessage={snackBarMessage} snackBarStatus={snackBarStatus}  />
            }
        </Stack>
    )
}

export default SignUp
