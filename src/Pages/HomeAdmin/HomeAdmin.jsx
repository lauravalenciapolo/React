import { useEffect, useState } from "react";
import { LoadCard } from "../../Components/LoadCard/LoadCard";
import {fetchLoads} from "../../assets/Services/Services";
import { Box, Typography } from "@mui/material";

function HomeAdmin({name}) {
    const [loadData, setLoadData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchLoads();
                if (response.success) {
                    const fetchedData = response.data;
                    setLoadData(fetchedData);
                }
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };
    
        fetchData();
    }, []);
    
    return (
        <Box>    
            <Typography variant="h1">Hola, Admin {name}</Typography>
            {loadData && <LoadCard data={loadData} setData={setLoadData} />}
        </Box>
    );
}

export default HomeAdmin