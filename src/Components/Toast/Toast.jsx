import {useState} from "react";
import {Box, Snackbar} from "@mui/material";

export function Toast({error}) {

    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
      };
  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={handleClose}
        message={error}
      />
    </Box>
  );
}

export default Toast;
