import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Link, Modal, TextField } from '@mui/material';
import React, { useState } from 'react';

const Formulaire = ({ openModalForm, handleModalForm }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };


    return (
        <Modal open={openModalForm} onClose={handleModalForm}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    textAlign: "center",
                }}
            >

                <h2>Connexion</h2>
                <TextField fullWidth placeholder='Entrez votre email' size="small" />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Link underline="hover">Mode de passe oublier</Link>
                <Button variant="contained" color="info" size="small">Se connecter</Button>
            </Box>
        </Modal>
    );
}

export default Formulaire;
