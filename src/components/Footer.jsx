import { Box, Button, Grid2 as Grid, Link, TextField } from '@mui/material';
import React from 'react';

const FooterPage = () => {
    return (
        <Grid size={12} sx={{ backgroundColor: "black", padding: "30px 30px", margin: "auto" }}>
            <Grid size={12}>
                <Grid size={{ xs: 11, md: 6 }} sx={{ margin: "auto" }}>
                    <p style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "0px", textAlign: "center", marginBottom: "10px", color: "#fe4240" }}>SOUSCRIBE TO US</p>
                    <Grid size={12} sx={{ display: "flex", gap: "5px" }}>
                        <TextField size="small" placeholder="Enter your email..." fullWidth sx={{ backgroundColor: "white" }} />
                        <Button size="small" variant="contained" sx={{ backgroundColor: "#fe4240", padding: "0px 20px" }}>SUBSCRIBE</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={12} sx={{ display: "flex" }}>
                <Grid size={2} sx={{ color: "white", display: "flex", flexDirection: "column" }}>
                    <h5 style={{ margin: "20px 0px" }}>RELEASE</h5>
                    <Link sx={{ color: "gray", fontSize: "12px", marginTop: "10px" }} underline="hover">2016</Link>
                    <Link sx={{ color: "gray", fontSize: "12px", marginTop: "10px" }} underline="hover">2016</Link>
                    <Link sx={{ color: "gray", fontSize: "12px", marginTop: "10px" }} underline="hover">2016</Link>
                    <Link sx={{ color: "gray", fontSize: "12px", marginTop: "10px" }} underline="hover">2016</Link>
                    <Link sx={{ color: "gray", fontSize: "12px", marginTop: "10px" }} underline="hover">2016</Link>
                    <Link sx={{ color: "gray", fontSize: "12px", marginTop: "10px" }} underline="hover">2016</Link>
                </Grid>
                <Grid size={2} sx={{ color: "white", display: "flex", flexDirection: "column" }}>
                    <h5 style={{ margin: "20px 0px" }}>MOVIES</h5>
                    <Link sx={{ color: "gray", fontSize: "12px", marginTop: "10px" }} underline="hover">AVENTURE</Link>
                    <Link sx={{ color: "gray", fontSize: "12px", marginTop: "10px" }} underline="hover">AVENTURE</Link>
                    <Link sx={{ color: "gray", fontSize: "12px", marginTop: "10px" }} underline="hover">AVENTURE</Link>
                    <Link sx={{ color: "gray", fontSize: "12px", marginTop: "10px" }} underline="hover">AVENTURE</Link>
                    <Link sx={{ color: "gray", fontSize: "12px", marginTop: "10px" }} underline="hover">AVENTURE</Link>
                    <Link sx={{ color: "gray", fontSize: "12px", marginTop: "10px" }} underline="hover">AVENTURE</Link>
                </Grid>
                <Grid size={3} sx={{ color: "white", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <h5 style={{ margin: "20px 0px" }}>REVIEW MOVIES</h5>
                    <Grid size={12} sx={{display: "flex", flexWrap: "wrap", gap: "2px"}}>
                        <Button
                            sx={{ display: 'block', backgroundColor: "rgba(255, 255, 255, 0.2)", marginRight: "5px", fontSize: "10px", color: "white"}}
                        >
                            Commedy
                        </Button>
                        <Button
                            sx={{ display: 'block', backgroundColor: "rgba(255, 255, 255, 0.2)", marginRight: "5px", fontSize: "10px", color: "white"}}
                        >
                            Commedy
                        </Button>
                        <Button
                            sx={{ display: 'block', backgroundColor: "rgba(255, 255, 255, 0.2)", marginRight: "5px", fontSize: "10px", color: "white"}}
                        >
                            Commedy
                        </Button>
                        <Button
                            sx={{ display: 'block', backgroundColor: "rgba(255, 255, 255, 0.2)", marginRight: "5px", fontSize: "10px", color: "white"}}
                        >
                            Commedy
                        </Button>
                        <Button
                            sx={{ display: 'block', backgroundColor: "rgba(255, 255, 255, 0.2)", marginRight: "5px", fontSize: "10px", color: "white"}}
                        >
                            Commedy
                        </Button>
                        <Button
                            sx={{ display: 'block', backgroundColor: "rgba(255, 255, 255, 0.2)", marginRight: "5px", fontSize: "10px", color: "white"}}
                        >
                            Commedy
                        </Button>
                        <Button
                            sx={{display: 'block', backgroundColor: "rgba(255, 255, 255, 0.2)", marginRight: "5px", fontSize: "10px", color: "white"}}
                        >
                            Commedy
                        </Button>
                    </Grid>
                </Grid>
                <Grid size={2} sx={{ color: "white", display: "flex", gap: "5px", flexDirection: "column" }}>
                    <h5 style={{ margin: "20px 0px" }}>LAST MOVIES</h5>
                    <Grid sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <Box sx={{ width: "70px", height: "40px", backgroundColor: "gray" }}>
                        </Box>
                        <h6>Eventlet Ut Molesti</h6>
                    </Grid>
                    <Grid sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <Box sx={{ width: "70px", height: "40px", backgroundColor: "gray" }}>
                        </Box>
                        <h6>Eventlet Ut Molesti</h6>
                    </Grid>
                    <Grid sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <Box sx={{ width: "70px", height: "40px", backgroundColor: "gray" }}>
                        </Box>
                        <h6>Eventlet Ut Molesti</h6>
                    </Grid>
                    <Grid sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <Box sx={{ width: "70px", height: "40px", backgroundColor: "gray" }}>
                        </Box>
                        <h6>Eventlet Ut Molesti</h6>
                    </Grid>
                </Grid>
                <Grid size={2} sx={{ color: "white", display: "flex", flexDirection: "column" }}></Grid>
            </Grid>
        </Grid>
    );
}

export default FooterPage;
