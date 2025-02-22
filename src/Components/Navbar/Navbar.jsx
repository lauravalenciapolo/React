import { Box } from '@mui/material'
import makersLogo from '../../assets/Img/makersLogo.png'

export function Navbar() {
    return (
        <Box sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100px", // ajusta el tamaño deseado
            p: 1,         // padding opcional
          }}>
            <img src={makersLogo} alt="Logo" width={"100px"}/>
        </Box>
    )
}

export default Navbar