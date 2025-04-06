import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

const BtnFilter = ({ name, setName, filter, setFilter, catName, setCatName, focus}) => {
    const [change, setChange] = useState(false)
    const handleBtnClick = (filtre) => {
        setName(name)
        setCatName(catName)
        setFilter(filtre)
        setChange(true)
    }
    return (
        <Box sx={{ display: "flex", gap: "2px", width: { xs: "100%", md: "78%" }, marginLeft: { xs: "60px", md: "auto" }, margin: "15px auto 4px auto", }}>
            <Button
                onClick={() => handleBtnClick("all")}
                sx={{
                    my: 2,
                    marginLeft: "10px",
                    margin: "0px",
                    color: change && filter === "all" ? 'white' : "black", display: 'block',
                    backgroundColor: change && filter === "all" ? "#fe4240" : "rgba(0, 0, 0, 0.19)",
                    marginRight: "5px"
                }}
            >
                All
            </Button>

            <Button
                onClick={() => handleBtnClick("dramatique")}
                sx={{
                    my: 2,
                    color: change && filter === "dramatique" ? 'white' : 'black',
                    margin: "0px", display: 'block',
                    backgroundColor: change && filter === "dramatique" ? "#fe4240" : "rgba(0, 0, 0, 0.19)",
                    marginRight: "5px"
                }}
            >
                Action
            </Button>
            <Button
                onClick={() => handleBtnClick("comedie")}
                sx={{
                    my: 2,
                    color: change && filter === "comedie" ? 'white' : 'black',
                    margin: "0px", display: 'block',
                    backgroundColor: change && filter === "comedie" ? "#fe4240" : "rgba(0, 0, 0, 0.19)",
                    marginRight: "5px"
                }}
            >
                Policiers
            </Button>
            <Button
                onClick={() => handleBtnClick("scifi")}
                sx={{
                    my: 2,
                    color: change && filter === "scifi" ? 'white' : 'black',
                    margin: "0px", display: 'block',
                    backgroundColor: change && filter === "scifi" ? "#fe4240" : "rgba(0, 0, 0, 0.19)",
                    marginRight: "5px"
                }}
            >
                Tendances
            </Button>
        </Box>
    );
}

export default BtnFilter;
