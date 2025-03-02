import React from 'react';
import { Box } from '@mui/material';

const Item = () => {
    return (
        <>
            <Box>
                <Box
                    sx={{ backgroundColor: "gray", height: "200px", width: "150px" }}
                >
                </Box>
                <Box>
                    <p style={{ textAlign: "center", margin: "5px " }}>Citizen Sildier</p>
                </Box>
                <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <p>2016</p>
                    <h4>Genre</h4>
                </Box>
            </Box>
        </>
    );
}

export default Item;
