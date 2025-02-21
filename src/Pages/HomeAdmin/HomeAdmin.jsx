import { useEffect, useState } from "react";
import { LoadCard } from "../../Components/LoadCard/LoadCard";
import {fetchLoads} from "../../assets/Services/Services";

function HomeAdmin() {
    const [loadData, setLoadData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchLoads();
                if (response.success) {
                    setLoadData(response.data);
                }
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        }
        fetchData();
    }, []);
    return (
        <div>    
            <h1>Hola, Admin ...</h1>
            {loadData && <LoadCard data={loadData} />}
        </div>
    );
}

export default HomeAdmin