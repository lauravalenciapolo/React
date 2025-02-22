import { useEffect, useState } from "react"
import HomeAdmin from "../HomeAdmin/HomeAdmin"
import HomeUser from "../HomeUser/HomeUser"
import { useNavigate } from "react-router-dom"
import { Button, Box } from "@mui/material"
import Navbar from "../../Components/Navbar/Navbar"

export function HomeByRol() {
    const user = (JSON.parse(localStorage.getItem("User")))
    const navigate = useNavigate()
    useEffect(() => {
       !user && navigate("/") 
    },[user])
    const handleClick = () => {
        localStorage.removeItem("User");
        localStorage.removeItem("tokenUser");
        navigate("/")
    }
    return (
        <Box>
            <Navbar />
            <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            {user.rol === "admin" ? <HomeAdmin name={user.name}/> : <HomeUser name={user.name}/>}
            <Button variant="contained" onClick={handleClick}>Cerrar sesión</Button>
            </Box>
        </Box>
    )
}