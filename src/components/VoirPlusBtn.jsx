import { Button } from '@mui/material';
import React from 'react';

const VoirPlusBtn = ({className, showMore, setClassName, setShowMore}) => {
    const set = () => {
        setClassName(className)
        setShowMore(!showMore)
    }
    return (
        <>
            <Button 
                sx={{color: "white", width: "200px", margin: "auto", backgroundColor: "#fe4240", display: "flex", alignSelf: "center"}}
                variant='contained'
                onClick={set}
            >
                {
                    showMore ? "VOIR MOINS DE FILMS" : "VOIR PLUS DE FILMS"
                }
            </Button>   
        </>
    );
}

export default VoirPlusBtn;
