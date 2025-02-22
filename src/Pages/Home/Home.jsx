import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { Box, Typography } from "@mui/material";

function Home() {

  useEffect(() => {
    const token = localStorage.getItem("tokenUser");
    if (token) {
      window.location.href = "/miCuenta";
    }
  }, []);

  return (
    <Box>
      <Navbar />
      <Typography variant="h1">Bienvenido a Makers</Typography>
      <LoginForm />
    </Box>
  );
}

export default Home;
