import { Box, Button, Grid2 as Grid, TextField } from '@mui/material';
import React from 'react';
import ItemsContainer from './ItemsContainer';

const ContactUs = () => {
    return (
        <ItemsContainer>
            <Grid container spacing={1}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField placeholder="FIST NAME" fullWidth size='small' />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField placeholder="LAST NAME" fullWidth size='small' />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField placeholder="EMAIL" fullWidth size='small' />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField placeholder="SUBJECT" fullWidth size='small' />
                </Grid>
                <Grid
                    size={12}
                >
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        placeholder="YOUR MESSAGE"
                        fullWidth size='small'
                    />
                </Grid>
                <Box>
                    <Button variant='contained' sx={{ backgroundColor: "#fe4240" }} >SEND MESSAGE</Button>
                </Box>
            </Grid>
        </ItemsContainer>
    );
}

export default ContactUs;
