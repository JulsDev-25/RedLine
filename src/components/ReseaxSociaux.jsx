import { Facebook, FacebookOutlined } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import React from 'react';

const ReseaxSociaux = () => {
    return (
        <Box sx={{ position: "fixed", zIndex: "999", left: "0px", bottom: "2vh", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px"}}>
            <Box sx={{backgroundColor: '#03c4f9', borderRadius: "0px 20px 20px 0px", fontSize: "13px", color: "white"}}>
                <IconButton sx={{padding: "3px"}}>
                    <FacebookOutlined sx={{color: 'white', fontSize: "30px"}}/>
                </IconButton>
            </Box>
            <Box sx={{backgroundColor: '#007FFF', borderRadius: "0px 20px 20px 0px", paddingLeft: "10px", fontSize: "13px", color: "white"}}>
                Facebook 
                <IconButton sx={{marginLeft: "10px", padding: "3px"}}>
                    <FacebookOutlined sx={{color: 'white', fontSize: "30px"}}/>
                </IconButton>
            </Box>
            <Box sx={{backgroundColor: '#ff6664', borderRadius: "0px 20px 20px 0px", fontSize: "13px", color: "white"}}>
                <IconButton sx={{padding: "3px"}}>
                    <FacebookOutlined sx={{color: 'white', fontSize: "30px"}}/>
                </IconButton>
            </Box>
            <Box sx={{backgroundColor: '#fe4240', borderRadius: "0px 20px 20px 0px", fontSize: "13px", color: "white"}}>
                <IconButton sx={{padding: "3px"}}>
                    <FacebookOutlined sx={{color: 'white', fontSize: "30px"}}/>
                </IconButton>
            </Box>
        </Box>
    );
}

export default ReseaxSociaux;
