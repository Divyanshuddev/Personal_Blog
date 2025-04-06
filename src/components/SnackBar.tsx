import { Alert, Snackbar, SnackbarOrigin } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

interface State extends SnackbarOrigin {
    open: boolean;
}

type SnackBarProps={
    openSnackBar:boolean;
    snackBarMessage:string;
    snackBarStatus:string;
}
const SnackBar:React.FC<SnackBarProps> = ({openSnackBar,snackBarMessage,snackBarStatus}) => {
    const [state, setState] = useState<State>({
        open: openSnackBar,
        vertical: 'top',
        horizontal: 'center'
    });
    const { vertical, horizontal, open } = state;
    const handleClose = () => {
        setState({ ...state, open: false });
    };
    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            autoHideDuration={2000}
            key={vertical + horizontal}
            color='success'
        >
            <Alert
    severity={snackBarStatus}
    variant="filled"
    sx={{ width: '100%' }}
  >
    {snackBarMessage}
  </Alert>
        </Snackbar>
    )
}

export default SnackBar
