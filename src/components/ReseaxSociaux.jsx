import { FacebookOutlined } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";

const ReseauxSociaux = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setVisibleIndex(index);
  };

  const handleMouseLeave = () => {
    setVisibleIndex(null);
  };

  const handleClick = (index) => {
    setVisibleIndex((prev) => (prev === index ? null : index));
  };

  const socialLinks = [
    { name: "Facebook", color: "#03c4f9" },
    { name: "Twitter", color: "#007FFF" },
    { name: "Instagram", color: "#ff6664" },
    { name: "YouTube", color: "#fe4240" },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: "999",
        left: "0px",
        bottom: "2vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "4px",
      }}
    >
      {socialLinks.map((social, index) => (
        <Box
          key={index}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          sx={{
            backgroundColor: social.color,
            borderRadius: "0px 20px 20px 0px",
            fontSize: "13px",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: visibleIndex === index ? "0px 0px 0px 3px": "0px 5px 0px 3px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            width: visibleIndex === index ? "auto" : "30px",
          }}
        >
          <span
            className="detailName"
            style={{
              display: visibleIndex === index ? "block" : "none",
              marginRight: "10px",
            }}
          >
            {social.name}
          </span>
          <IconButton sx={{ padding: "3px" }}>
            <FacebookOutlined sx={{ color: "white", fontSize: "30px" }} />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default ReseauxSociaux;
