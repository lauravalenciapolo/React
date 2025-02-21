import { useEffect, useState } from "react"
import HomeAdmin from "../HomeAdmin/HomeAdmin"
import HomeUser from "../HomeUser/HomeUser"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

export function HomeByRol() {
    const [user, setUser] = useState()
    const navigate = useNavigate()
    useEffect(() => {
       const user = localStorage.getItem("User")
       !user && navigate("/") 
    },[])
    const handleClick = () => {
        localStorage.clear()
        navigate("/")
    }
    return (
        <div>
            {JSON.parse(localStorage.getItem("User")).rol === "admin" ? <HomeAdmin /> : <HomeUser />}
            <Button variant="contained" onClick={handleClick}>Cerrar sesión</Button>
        </div>
    )
}