import { Button } from "@mui/material";
// import {updateLoadState} from "../../assets/Services/Services";

export function LoadCard({data}) {
    const handleClick = (item, state) => {
        console.log(item, state);
    }

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <p>{item.emailUser}</p>
                    <p>{item.monto}</p>
                    <p>{item.estado}</p>
                    <Button variant="contained" onClick={handleClick}>Aceptar</Button>
                    <Button variant="outlined" onClick={handleClick}>Rechazar</Button>
                </div>
            ))}
        </div>

    )
}

export default LoadCard