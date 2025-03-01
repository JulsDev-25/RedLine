import { AppBar, Grid2 as Grid } from '@mui/material';
import React from 'react';
import Carousel from './Carousel';
import ResponsiveAppBar from './AppBar';

const Layout = () => {
    return (
        <>
            <ResponsiveAppBar />
            <Carousel />
        </>
    );
}

export default Layout;
