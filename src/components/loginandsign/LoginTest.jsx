import React from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import logo from "../../assets/logo.svg";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

import Copyright from "../../shared/Copyright";
import { ModalContext } from "../../context/ModalContext";
import { Alert, Snackbar } from "@mui/material";
export default function LoginTest() {
  return (
    <div>
      <Container className="ContainerModal" component="main" maxWidth="xs">
        <Box
          noValidate
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="/" className="w-25  m-auto" />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" style={{ width: "100%" }} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            ></TextField>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
