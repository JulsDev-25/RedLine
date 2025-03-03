import { AppBar, Box, Grid2 as Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
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
import Formulaire from './formulaire';

const Movies = [
    {
        name: "batmanmovie",
        date: "2017",
        category: "comedie",
        imageUrl: "/src/assets/img/img/batmanmovie-2017-comedie.jpg"
    },
    {
        name: "hostel",
        date: "2005",
        category: "thriller",
        imageUrl: "/src/assets/img/img/hostel-2005-thriller.jpg"
    },
    {
        name: "inception",
        date: "2010",
        category: "scifi",
        imageUrl: "/src/assets/img/img/inception-2010-scifi.jpg"
    },
    {
        name: "intouchables",
        date: "2011",
        category: "comedie",
        imageUrl: "/src/assets/img/img/intouchables-2011-comedie.jpg"
    },
    {
        name: "lepatientanglais",
        date: "1996",
        category: "dramatique",
        imageUrl: "/src/assets/img/img/lepatientanglais-1996-dramatique.jpg"
    },
    {
        name: "lesdeuxtours",
        date: "2002",
        category: "aventure",
        imageUrl: "/src/assets/img/img/lesdeuxtours-2002-aventure.jpg"
    },
    {
        name: "seven",
        date: "1995",
        category: "thriller",
        imageUrl: "/src/assets/img/img/seven-1995-thriller.jpg"
    },
    {
        name: "shutterisland",
        date: "2010",
        category: "thriller",
        imageUrl: "/src/assets/img/img/shutterisland-2010-thriller.jpg"
    },
    {
        name: "starwarsempire",
        date: "1980",
        category: "scifi",
        imageUrl: "/src/assets/img/img/starwarsempire-1980-scifi.jpg"
    },
    {
        name: "Survivestyle5",
        date: "2004",
        category: "comedie",
        imageUrl: "/src/assets/img/img/Survivestyle5-2004-comedie.jpg"
    },
    {
        name: "swissarmyman",
        date: "2016",
        category: "comedie",
        imageUrl: "/src/assets/img/img/swissarmyman-2016-comedie.jpg"
    },
    {
        name: "thefall",
        date: "2006",
        category: "dramatique",
        imageUrl: "/src/assets/img/img/thefall-2006-dramatique.jpg"
    },
    {
        name: "WhatWeDoInTheShadows",
        date: "2014",
        category: "comedie",
        imageUrl: "/src/assets/img/img/WhatWeDoInTheShadows-2014-comedie.jpg"
    },
    {
        name: "zoolander",
        date: "2001",
        category: "comedie",
        imageUrl: "/src/assets/img/img/zoolander-2001-comedie.jpg"
    }
]

const Layout = () => {
    const [modalForm, setModalForm] = useState(false);

    const handleShowModalForm = () => setModalForm(true)
    const handleCloseModalForm = () => setModalForm(false)

    return (
        <Grid container>
            <ResponsiveAppBar />
            <Carousel />
            <Grid size={12}><ContactBar handleShowModalForm={handleShowModalForm} /></Grid>
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
                    {
                        Movies.map((item) => (
                            <Item name={item.name} date={item.date} category={item.category} imageUrl={item.imageUrl} />
                        ))
                    }
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
                    {
                        Movies.map((item) => (
                            <Item name={item.name} date={item.date} category={item.category} imageUrl={item.imageUrl} />
                        ))
                    }
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

            <Formulaire openModalForm={modalForm} handleModalForm={handleCloseModalForm} />

            <FooterPage />
        </Grid>
    );
}

export default Layout;
