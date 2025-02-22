import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Form from "../FormBase/FormBase"
import { fetchLogin } from "../../assets/Services/Services"
import Toast from "../Toast/Toast"
import Joi from "joi"

export function LoginForm() {
    const [error, setError] = useState(null);
    const [errorsForm, setErrorsForms] = useState({});
    const navigate = useNavigate();
    const dataFormLogin = {
        title: "Iniciar Sesión",
        subTitle: "Ingrese sus credenciales para acceder",
        inputs: [
          { label: "Email", type: "email", name: "email" },
          { label: "Contraseña", type: "password", name: "password" },
        ],
        nameButton: "Ingresar",
      };
      const loginSchema = Joi.object({
        email: Joi.string().email({ tlds: { allow: false } }).required().messages({
          "string.email": "Ingrese un correo válido",
          "string.empty": "El correo es obligatorio",
        }),
        password: Joi.string().min(4).required().messages({
          "string.min": "La contraseña debe tener al menos 6 caracteres",
          "string.empty": "La contraseña es obligatoria",
        }),
      });
      const [dataLoginForm, setDataLoginForm] = useState({
        email: "",
        password: "",
      });
      const handleSubmitLoginUser = async (e) => {
        e.preventDefault();
        const { error: validationError } = loginSchema.validate(dataLoginForm, { abortEarly: false });
        if (validationError) {
          const errorMessages = validationError.details.map((err) => err.message).join("\n");
          setError(errorMessages);
          return;
        }
        try {
          const response = await fetchLogin(dataLoginForm.email, dataLoginForm.password);
          localStorage.setItem("tokenUser", response.token);
          localStorage.setItem("User", JSON.stringify(response.user));
      
          if (response.success) {
            navigate("/miCuenta");
          }
        } catch (error) {
          console.error("Error al hacer login", error);
          setError(error.message);
        }
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setDataLoginForm({ ...dataLoginForm, [name]: value });
        const fieldLoginSchema = loginSchema.extract(name);
        const { error } = fieldLoginSchema.validate(value);
        setErrorsForms((prevErrors) => ({
          ...prevErrors,
          [name]: error ? error.message : "",
        }));
      };

    return (
      <>
              {error && <Toast error={error} />}
              <Form
                data={dataFormLogin}
                handleSubmit={handleSubmitLoginUser}
                handleChange={handleChange}
                errors={errorsForm}
              />
      </>
    )
}

export default LoginForm