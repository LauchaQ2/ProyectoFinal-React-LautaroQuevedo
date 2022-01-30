import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';


export default function ContactModal({size,open,handleClose}){
    return(
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            className="modal-contact-data"
            open={open} 
        >
        <DialogContent>
            <Box className={size > 500 ? "form-container" : "w-100 form-mobile text-center"}>
            <DialogTitle>Gracias!</DialogTitle>
            <h4 className={size > 500 ? null : "text-wrap"}>Hemos recibido su email, pronto nos comunicaremos con usted.</h4>
            </Box>
        </DialogContent>
        </Dialog>
    )
}