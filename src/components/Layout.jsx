import { AppBar, Box, Grid2 as Grid, IconButton, TextField } from '@mui/material';
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
import ItemsGrid from './ItemsGrid';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import BtnFilter from './BtnFilter';

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
    const [showMore, setShowMore] = useState(false)
    const lfilm = 12 // Nombre de filme à afficher
    const [className, setClassName] = useState("")
    const [nameBtnFilter, setNameBtnFilter] = useState("")
    const [filterMovies, setFilterMovies] = useState("all")
    const [catName, setCatName] = useState("");  //  Catégorie de films à filtrer

    
    let Moviesf = filterMovies === "all" ? Movies : Movies.filter((item) => item.category === filterMovies)

    const handleShowModalForm = () => setModalForm(true)
    const handleCloseModalForm = () => setModalForm(false)

    const moviesSlice = (MoviesTab, taille) => {
        const movies = taille ? MoviesTab.slice(0, taille) : Movies
        return movies
    }

    let gender = Movies.map(el => el.category)
    gender = gender.filter((el, index) => index == gender.indexOf(el))

    return (
        <Grid container>
            {/* NavBar */}
            <ResponsiveAppBar gender={gender} />

            {/* Banière de présentation sous forme de carousel */}
            <Carousel />
            <Grid size={12}><ContactBar handleShowModalForm={handleShowModalForm} /></Grid>

            {/* Réseaux sociaux en position absolut sur la gauche  */}
            <ReseaxSociaux />

            {/* ********* Première catégorie de films ********** */}
            <Grid size={12}>
                <ItemsGrid borderc="true" jc="space-around">
                    {
                        moviesSlice(Movies, 5).map((item) => (
                            <Item name={item.name} date={item.date} category={item.category} imageUrl={item.imageUrl} />
                        ))
                    }
                </ItemsGrid>
            </Grid>

            {/* ********* Deuxième catégorie de films ********** */}
            <h2 style={{ marginTop: "65px" }}>FEATURED MOVIES</h2>
            <Grid sx={{ width: "100%" }}>
                {/* Bouttons de filtres des films */}
                <BtnFilter 
                    name={nameBtnFilter} 
                    setName={setNameBtnFilter} 
                    filter={filterMovies} 
                    setFilter={setFilterMovies} 
                    catName="featuredMovies"
                    setCatName={setCatName}
                    focus={catName}
                />
                {/* Items */}
                <ItemsGrid borderc="true" mb='0px'>
                    {
                        moviesSlice(catName === "featuredMovies" ? Moviesf : Movies, showMore && className == "featuredMovies" ? null : lfilm).map((item) => (
                            <Item name={item.name} date={item.date} category={item.category} imageUrl={item.imageUrl} />
                        ))
                    }
                </ItemsGrid>

                {/* Bouton voir plus */}
                <VoirPlusBtn className="featuredMovies" showMore={showMore} setClassName={setClassName} setShowMore={setShowMore} />
            </Grid>

            {/* ********* Troisième Catégories de films ********** */}
            <h2 style={{ marginTop: "65px" }}>FEATURES SERIE TV</h2>
            <Grid size={12}>
                {/* Boutons de filtre */}
                <BtnFilter 
                    name={nameBtnFilter} 
                    setName={setNameBtnFilter} 
                    filter={filterMovies} 
                    setFilter={setFilterMovies} 
                    catName="featuredSeries"
                    setCatName={setCatName}
                    focus={catName}
                />
                {/* Items */}
                <ItemsGrid mb='0px'>
                    {
                        moviesSlice(catName === "featuredSeries" ? Moviesf : Movies, showMore && className == "featuredSeries" ? null : lfilm).map((item) => (
                            <Item name={item.name} date={item.date} category={item.category} imageUrl={item.imageUrl} />
                        ))
                    }
                </ItemsGrid>
                <Grid size={12}>
                    <VoirPlusBtn className="featuredSeries" showMore={showMore} setClassName={setClassName} setShowMore={setShowMore} />
                </Grid>
            </Grid>

            {/* ********* Shop movies ********** */}
            <h2 style={{ marginTop: "65px" }}>SHOP MOVIES</h2>
            <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ padding: "20px", display: "grid", gridTemplateColumns: "repeat(max(3), 140px)", gap: "10px" }} mb='0px'>
                    {
                        moviesSlice(Movies, 6).map((item) => (
                            <Item imageUrl={item.imageUrl} />
                        ))
                    }
                </Box>
                <Box
                    sx={{ width: "400px", margin: "20px", backgroundColor: "lightgrey", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                    <IconButton>
                        <PlayCircleIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Grid>

            {/* ********* Formulaire de contact ********** */}
            <h2 style={{ marginTop: "65px" }}>CONTACT US</h2>
            <Box>
                <ContactUs />
            </Box>

            {/* ********* Formulaire de connexion ********** */}
            <Formulaire openModalForm={modalForm} handleModalForm={handleCloseModalForm} />

            {/* ********* Footerpage ********** */}
            <FooterPage />
        </Grid>
    );
}

export default Layout;
