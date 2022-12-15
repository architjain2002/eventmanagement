import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function AlertDialog({data,utility,futility}) {

  return (
      <Dialog
        open={true}
        onClose={futility}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {data}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={futility}>No</Button>
          <Button onClick={()=>utility()} autoFocus>
            Yes
          </Button>
        </DialogActions>

      </Dialog>
  );
}
