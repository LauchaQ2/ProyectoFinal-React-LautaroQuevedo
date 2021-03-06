import React, {useContext} from 'react';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './PayModal.css'
import CartContext from '../../context/CartContext';

export default function PayModal({size}) {

    const {dataCredit, setDataCredit} = useContext(CartContext)

            const handleDate = (e) => {
            const value = e.target.value.replace(/\D/g, "");
            const {name} = e.target
            setDataCredit({...dataCredit, [name] : value})
            };
            const handleCVC = (e) => {
                const value = e.target.value.replace(/\D/g, "");
                const {name} = e.target
                setDataCredit({...dataCredit, [name] : value})
                };
            const handleNumbers = (e) => {
            const value = e.target.value.replace(/\D/g, "");
            const {name} = e.target
            setDataCredit({...dataCredit, [name] : value})
                };
                const handleChange = (e) => {
                    const {name, value} = e.target
                    setDataCredit({...dataCredit, [name] : value})
                }


  return (
    <div>
        <DialogContent>
            <Box component="form" noValidate autoComplete="off" className={size > 500 ? "form-container2" : "w-100 form-mobile text-center"}>
                  <TextField className={size > 500 ? null : "w-100"} label="Nombre como aparece en la tarjeta" name="nombre" variant="outlined" onChange={handleChange}/>
                    <TextField className={size > 500 ? null : "w-100"} inputProps={{maxLength: 16}} onChange={handleNumbers} value={dataCredit.numero} label="Número de la tarjeta" name="numero" variant="outlined"/>
                    <Box component="form" noValidate autoComplete="off" className="form-container3">
                    <TextField className={size > 500 ? null : "w-100"} inputProps={{maxLength: 4, required:"true"}} onChange={handleDate} label="MM/YY" value={dataCredit.fecha} name="fecha" variant="outlined"/>
                    <TextField className={size > 500 ? null : "w-100"} inputProps={{maxLength: 3, type: "password", required:"true"}} onChange={handleCVC} label="CVC" value={dataCredit.cvc} name="cvc" variant="outlined"/>
                    </Box>
            </Box>
        </DialogContent>
        
    </div>
  );
}