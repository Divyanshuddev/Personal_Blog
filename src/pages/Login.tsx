import { Button, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../app/store'
import { resetSnackbar, userLogin } from '../feature/users/userLoginSlice'
import SnackBar from '../components/SnackBar'
import { useEffect } from 'react'
const styles = {
  root: {
    height: "100vh",
    boxSizing: "border-box",
  },
  loginContainer: {
    boxSizing: "border-box",
    padding: "2rem",
    border: "1px solid gray",
    borderRadius: "0.4rem",
    width: "60%",
    boxShadow: "1px 1px 10px black"
  },
  loginTitle: {
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
  email: string;
  password: string;
}
const Login = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const snackbar = useSelector((state: RootState) => state.login.snackbar);
  const snackBarMessage = useSelector((state: RootState) => state.login.snackbarMessage);
  const snackBarStatus = useSelector((state: RootState) => state.login.snackbarStatus);
  const onSubmit = (data: FormValues) => {
    dispatch(userLogin(data))
  }
  useEffect(() => {
    return () => {
      dispatch(resetSnackbar());
    };
  }, [dispatch]);

  useEffect(() => {
    let timeoutId: number;

    if (snackBarStatus === 'success') {
      timeoutId = setTimeout(() => {
        navigate('/');
      }, 3000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [snackBarStatus, navigate]);
  return (
    <Stack justifyContent={'center'} alignItems={'center'} sx={styles.root}>
      <Stack sx={styles.loginContainer} direction={'column'} spacing={3}>
        <Typography sx={styles.loginTitle}>Login</Typography>
        <TextField variant='outlined' label='Email' sx={styles.textField} type='email' slotProps={{ inputLabel: { style: { color: "white" } } }} {...register('email', {
          required: "Email is required"
        })} error={!!errors.email} helperText={errors.email?.message} />
        <TextField variant='outlined' label='Password' type='password' sx={styles.textField} slotProps={{ inputLabel: { style: { color: "white" } } }} {...register('password', {
          required: "Password is required"
        })} error={!!errors.password} helperText={errors.password?.message} />
        <Button variant='contained' type='submit' onClick={handleSubmit(onSubmit)} >Login</Button>
        <Typography alignSelf={'center'}>Create your account <Link to={'/sign-up'}>Sign up</Link></Typography>
      </Stack>
      {
        snackbar &&
        <SnackBar openSnackBar={snackbar} snackBarMessage={snackBarMessage} snackBarStatus={snackBarStatus} />
      }
    </Stack>
  )
}

export default Login
