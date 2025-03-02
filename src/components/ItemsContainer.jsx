import React from 'react';
import { Grid2 as Grid } from '@mui/material';

const ItemsContainer = ({ mb = "10px", borderc = false, children, ...props }) => {
    return (
        <>
            <Grid
                size={12}
                sx={{
                    padding: "20px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px", 
                    maxWidth: "80%",
                    margin: "10px auto",
                    justifyContent: "space-around",
                    border: borderc ? "1px solid lightgray" : "none",
                    marginTop: mb,
                    ...props
                }}
            >
                {children}
            </Grid>
        </>
    );
}

export default ItemsContainer;
