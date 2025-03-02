import { AppBar, Box, Grid2 as Grid, TextField } from '@mui/material';
import React from 'react';
import Carousel from './Carousel';
import ResponsiveAppBar from './AppBar';
import ContactBar from './ContactBar';
import Item from './Item';
import ItemsContainer from './ItemsContainer';
import VoirPlusBtn from './VoirPlusBtn';
import Button from '@mui/material/Button';
import ReseaxSociaux from './ReseaxSociaux';
import ContactUs from './ContactUs';
import FooterPage from './Footer';

const Layout = () => {
    return (
        <Grid container>
            <ResponsiveAppBar />
            <Carousel />
            <Grid size={12}><ContactBar /></Grid>
            <ReseaxSociaux />
            <Grid size={12}>
                <ItemsContainer borderc={true}>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </ItemsContainer>
            </Grid>

            <h2 style={{ marginTop: "65px" }}>FEATURED MOVIES</h2>
            <Grid>
                <Box sx={{ display: "flex", gap: "2px", width: { xs: "100%", md: "77%" }, marginLeft: { xs: "60px", md: "auto" }, margin: "15px auto 0px auto", }}>
                    <Button
                        sx={{ my: 2, marginLeft: "10px", margin: "0px", color: 'white', display: 'block', backgroundColor: "#fe4240", marginRight: "5px" }}
                    >
                        All
                    </Button>

                    <Button
                        sx={{ my: 2, color: 'black', margin: "0px", display: 'block', backgroundColor: "rgba(0, 0, 0, 0.19)", marginRight: "5px" }}
                    >
                        Action
                    </Button>
                    <Button
                        sx={{ my: 2, color: 'black', margin: "0px", display: 'block', backgroundColor: "rgba(0, 0, 0, 0.19)", marginRight: "5px" }}
                    >
                        Policiers
                    </Button>
                    <Button
                        sx={{ my: 2, color: 'transparent', margin: "0px", display: 'block', backgroundColor: "rgba(0, 0, 0, 0.19)", marginRight: "70px" }}
                    >
                        Tendances
                    </Button>
                </Box>
                <ItemsContainer mb='0px'>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </ItemsContainer>
                <VoirPlusBtn />
            </Grid>

            <h2 style={{ marginTop: "65px" }}>FEATURES SERIE TV</h2>
            <Grid size={12}>
                <Box sx={{ display: "flex", gap: "2px", width: { xs: "100%", md: "77%" }, marginLeft: { xs: "60px", md: "auto" }, margin: "15px auto 0px auto", }}>
                    <Button
                        sx={{ my: 2, marginLeft: "10px", margin: "0px", color: 'white', display: 'block', backgroundColor: "#fe4240", marginRight: "5px" }}
                    >
                        All
                    </Button>

                    <Button
                        sx={{ my: 2, color: 'black', margin: "0px", display: 'block', backgroundColor: "rgba(0, 0, 0, 0.19)", marginRight: "5px" }}
                    >
                        Action
                    </Button>
                    <Button
                        sx={{ my: 2, color: 'black', margin: "0px", display: 'block', backgroundColor: "rgba(0, 0, 0, 0.19)", marginRight: "5px" }}
                    >
                        Policiers
                    </Button>
                    <Button
                        sx={{ my: 2, color: 'transparent', margin: "0px", display: 'block', backgroundColor: "rgba(0, 0, 0, 0.19)", marginRight: "70px" }}
                    >
                        Tendances
                    </Button>
                </Box>
                <ItemsContainer mb='0px'>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </ItemsContainer>
                <Grid size={12}>
                    <VoirPlusBtn />
                </Grid>
            </Grid>

            <h2 style={{ marginTop: "65px" }}>SHOP MOVIES</h2>
            <Grid size={12}>
                <Box sx={{ display: "flex", gap: "2px", width: { xs: "100%", md: "77%" }, marginLeft: { xs: "60px", md: "auto" }, margin: "15px auto 0px auto", }}>
                    <Button
                        sx={{ my: 2, marginLeft: "10px", margin: "0px", color: 'white', display: 'block', backgroundColor: "#fe4240", marginRight: "5px" }}
                    >
                        All
                    </Button>

                    <Button
                        sx={{ my: 2, color: 'black', margin: "0px", display: 'block', backgroundColor: "rgba(0, 0, 0, 0.19)", marginRight: "5px" }}
                    >
                        Action
                    </Button>
                    <Button
                        sx={{ my: 2, color: 'black', margin: "0px", display: 'block', backgroundColor: "rgba(0, 0, 0, 0.19)", marginRight: "5px" }}
                    >
                        Policiers
                    </Button>
                    <Button
                        sx={{ my: 2, color: 'transparent', margin: "0px", display: 'block', backgroundColor: "rgba(0, 0, 0, 0.19)", marginRight: "70px" }}
                    >
                        Tendances
                    </Button>
                </Box>
                <ItemsContainer mb='0px'>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </ItemsContainer>
                <Grid size={12}>
                    <VoirPlusBtn />
                </Grid>
            </Grid>

            <h2 style={{ marginTop: "65px" }}>CONTACT US</h2>
            <Box>
                <ContactUs />
            </Box>

            <FooterPage />
        </Grid>
    );
}

export default Layout;
