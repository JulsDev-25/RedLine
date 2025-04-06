import React from 'react';
import { Box } from '@mui/material';

const Item = ({ name, date, category, imageUrl }) => {
    return (
        <>
            <Box>
                <Box
                    sx={{ height: "200px", width: "140px", backgroundColor: "gray" }}
                >
                    {imageUrl && <img src={imageUrl} alt={name} style={{ height: "100%", width: "100%", objectFit: "conver" }} />}
                </Box>
                {
                    name && <Box>
                        <p style={{ textAlign: "center", margin: "5px " }}>{name ? name : "n/a"}</p>
                    </Box>
                }
                {
                    date && category && <Box
                        sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                        <p>{date ? date : "n/a"}</p>
                        <h4>{category ? category : "n/a"}</h4>
                    </Box>
                }
            </Box>
        </>
    );
}

export default Item;
