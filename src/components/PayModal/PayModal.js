import React, {useState, useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Input from '@mui/material/Input'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './PayModal.css'
import CartContext from '../../context/CartContext';

export default function PayModal() {

    const [dateCard, setDateCard] = useState();
    const [cvc, setCvc] = useState();
    const [numbCredit, setNumbCredit] = useState();

    const {dataCredit, setDataCredit} = useContext(CartContext)

            const handleDate = (e) => {
            const value = e.target.value.replace(/\D/g, "");
            const {name} = e.target
            setDataCredit({...dataCredit, [name] : value})
            console.log(dataCredit)
            };
            const handleCVC = (e) => {
                const value = e.target.value.replace(/\D/g, "");
                const {name} = e.target
                setDataCredit({...dataCredit, [name] : value})
                console.log(dataCredit)
                };
            const handleNumbers = (e) => {
            const value = e.target.value.replace(/\D/g, "");
            const {name} = e.target
            setDataCredit({...dataCredit, [name] : value})
            console.log(dataCredit)
                };
                const handleChange = (e) => {
                    const {name, value} = e.target
                    setDataCredit({...dataCredit, [name] : value})
                    console.log(dataCredit)
                }


  return (
    <div>
        <DialogContent>
            <Box component="form" noValidate autoComplete="off" className="form-container2">
                  <TextField label="Nombre como aparece en la tarjeta" name="nombre" variant="outlined" onChange={handleChange}/>
                    <TextField inputProps={{maxLength: 16}} onChange={handleNumbers} value={dataCredit.numero} label="Número de la tarjeta" name="numero" variant="outlined"/>
                    <Box component="form" noValidate autoComplete="off" className="form-container3">
                    <TextField inputProps={{maxLength: 4, required:"true"}} onChange={handleDate} label="MM/YY" value={dataCredit.fecha} name="fecha" variant="outlined"/>
                    <TextField inputProps={{maxLength: 3, type: "password", required:"true"}} onChange={handleCVC} label="CVC" value={dataCredit.cvc} name="cvc" variant="outlined"/>
                    </Box>
            </Box>
        </DialogContent>
        
    </div>
  );
}