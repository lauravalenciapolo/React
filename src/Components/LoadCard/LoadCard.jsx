import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

export function LoadCard({ data, setData }) {
  const handleClick = (item, state) => {
    console.log(item, state);
    const newData = data.map((e) =>
      e.id === item ? { ...e, state: state } : e
    );
    setData(newData);
    //Se envía petición al back para aceptar o rechazar el prestamo
  };

  return (
    <Box>
      {data.map((item) => (
        <Box component="section" sx={{ p: 2 }} key={item.id}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Email: {item.emailUser}
              </Typography>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Monto: {item.monto}
              </Typography>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Estado: {item.state}
              </Typography>
            </CardContent>
            {setData && <CardActions>
              <Box
                display="flex"
                justifyContent="center"
                gap="20px"
                width={"100%"}
              >
                <Button
                  variant="contained"
                  onClick={() => handleClick(item.id, "accept")}
                >
                  Aceptar
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => handleClick(item.id, "reject")}
                >
                  Rechazar
                </Button>
              </Box>
            </CardActions>}
          </Card>
        </Box>
      ))}
    </Box>
  );
}

export default LoadCard;
