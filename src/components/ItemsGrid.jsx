import React from 'react';
import { Grid2 as Grid } from '@mui/material';

const ItemsGrid = ({ mb = "10px", borderc = false, jc="center", children, ...props }) => {
    return (
        <>
            <Grid
                size={12}
                sx={{
                    py: "20px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, 140px)",
                    justifyContent: jc,
                    rowGap: "30px",
                    columnGap: "10px",
                    maxWidth: "80%",
                    margin: "10px auto",
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

export default ItemsGrid;
