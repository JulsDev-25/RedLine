import { Box, Button } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import React from 'react';

const ContactBar = () => {
    return (
        <Box sx={{backgroundColor: "#fe4240", display: "flex", gap: "5px", padding: "5px 30px", alignItems: "center"}}>
            <CallIcon />
            <p>+(32)466 40 82 85</p>
            <Button size='small' sx={{backgroundColor: "black", color: "white", marginLeft: "20px"}}>LONGIN</Button>
            <Button size='small' sx={{backgroundColor: "black", color: "white"}}>REGISTER</Button>
        </Box>
    );
}

export default ContactBar;
