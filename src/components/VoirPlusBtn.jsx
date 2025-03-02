import { Button } from '@mui/material';
import React from 'react';

const VoirPlusBtn = () => {
    return (
        <>
            <Button 
                sx={{color: "white", width: "200px", margin: "auto", backgroundColor: "#fe4240", display: "flex", alignSelf: "center"}}
                variant='contained'
            >
                VOIR PLUS DE FILMS
            </Button>   
        </>
    );
}

export default VoirPlusBtn;
