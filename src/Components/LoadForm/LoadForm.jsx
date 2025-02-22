import { useState } from "react";
import Form from "../FormBase/FormBase";
import LoadCard from "../LoadCard/LoadCard";
import { Box } from "@mui/material";
import Joi from "joi";
export function LoadForm() {
  const [loads, setLoads] = useState([]);
  const [dataApplyLoan, setDataApplyLoan] = useState({
    monto: "",
  });
  const [errorsForm, setErrorsForm] = useState({});

  const dataForm = {
    title: "Solicitar Prestamo",
    subTitle: "Ingrese el monto que desea solicitar",
    inputs: [{ label: "Monto", type: "number", name: "monto" }],
    nameButton: "Solicitar",
  };
  const loadSchema = Joi.object({
    monto: Joi.number().integer().positive().required().messages({
      "number.base": "El monto debe ser un número",
      "number.integer": "El monto no puede contener decimales",
      "number.positive": "El monto debe ser mayor a 0",
      "any.required": "El monto es obligatorio",
    }),
  });

  const handleSubmitLoad = (e) => {
    e.preventDefault();
    const { error: validationError } = loadSchema.validate(dataApplyLoan, {
      abortEarly: false,
    });
    if (validationError) {
      const errorMessages = {};
      validationError.details.forEach((err) => {
        errorMessages[err.path[0]] = err.message;
      });
      setErrorsForm(errorMessages);
      return;
    }
    setErrorsForm({});
    const user = JSON.parse(localStorage.getItem("User"));
    const data = {
      ...dataApplyLoan,
      emailUser: user.email,
      state: "pending",
      id: user.id,
    };
    setLoads([...loads, data]);
    setDataApplyLoan({ monto: "" });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataApplyLoan({ ...dataApplyLoan, [name]: value });
    const fieldLoadSchema = loadSchema.extract(name);
    const { error } = fieldLoadSchema.validate(value);
    setErrorsForm((prevErrors) => ({
      ...prevErrors,
      [name]: error ? error.message : "",
    }));
  };

  return (
    <Box>
      <Form
        data={dataForm}
        handleSubmit={handleSubmitLoad}
        handleChange={handleChange}
        errors={errorsForm}
      />
      <LoadCard data={loads} />
    </Box>
  );
}

export default LoadForm;
