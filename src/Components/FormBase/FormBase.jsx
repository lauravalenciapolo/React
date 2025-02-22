import { Button, TextField, Box, Typography } from "@mui/material"

export function Form({ data, handleSubmit, handleChange, errors }) {
    return (
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          {data.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {data.subTitle}
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          {data.inputs.map((input, index) => (
            <Box key={index} mb={2}>
              <TextField
                fullWidth
                label={input.label}
                type={input.type}
                name={input.name}
                onChange={handleChange}
                error={Boolean(errors[input.name])}
                helperText={errors[input.name] || ""}
              />
            </Box>
          ))}
          <Button variant="contained" type="submit">
            {data.nameButton}
          </Button>
        </Box>
      </Box>
    );
  }
  
  export default Form  