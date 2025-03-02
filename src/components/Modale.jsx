import React, { useState } from "react";
import { Modal, Box, Button, Typography, TextField } from "@mui/material";

const ModalComponent = ({ open, handleClose }) => {
  const [age, setAge] = useState("");

  const handleSoumettre = () => {
    const ageInt = parseInt(age, 10);

    if (isNaN(ageInt)) {
      alert("Veuillez entrer un âge valide !");
      return;
    }

    if (ageInt < 18) {
      window.location.href = "https://www.imdb.com/?language=fr-fr";
    } else {
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={()=>{}}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">Vérification d'âge</Typography>
        
        <TextField
          fullWidth
          id="outlined-basic"
          label="Age"
          size="small"
          placeholder="Entrez votre âge..."
          value={age}
          onChange={(e) => setAge(e.target.value)}
          sx={{ mt: 2 }}
        />

        <Button
          variant="contained"
          color="info"
          onClick={handleSoumettre}
          sx={{ mt: 2 }}
        >
          Soumettre
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
