import React, { useState }  from 'react';
import "./style.css"
import Layout from './components/Layout';
import ModalComponent from './components/Modale';
import { Button, Snackbar, Alert, Box } from "@mui/material";

const App = () => {
  const [openModal, setOpenModal] = useState(true);
  const [showCookies, setShowCookies] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
    setTimeout(() => setShowCookies(true), 2000);
  };

  return (
    <>
      <Layout/>
      <ModalComponent open={openModal} handleClose={handleCloseModal} />

      {/* Boîte des cookies */}
      <Snackbar open={showCookies} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert
          severity="info"
          sx={{
            width: "100%",
            bgcolor: "white",
            color: "black",
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center",
          }}
          action={
            <Box>
              <Button onClick={() => setShowCookies(false)} color="success" sx={{ fontWeight: "bold" }}>
                Accepter
              </Button>
              <Button color="error" sx={{ fontWeight: "bold" }}>
                Refuser
              </Button>
            </Box>
          }
        >
          Nous utilisons des cookies pour améliorer votre expérience. Acceptez-vous ?
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
