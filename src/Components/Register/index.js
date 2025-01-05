import React, { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import Form from "../Form/index.js";

export default function Register() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          backgroundColor: "#3ac77b",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          fontWeight: "600",
        }}
      >
        Criar novo
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "auto",
            maxHeight: "90vh",
            boxShadow: 24,
          }}
        >
          <Form handleClose={handleClose} /> {/* Passando handleClose para o Form */}
        </Box>
      </Modal>
    </div>
  );
}
