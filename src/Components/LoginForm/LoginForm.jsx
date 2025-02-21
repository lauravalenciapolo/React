import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Form from "../FormBase/FormBase"
import { fetchLogin } from "../../assets/Services/Services"

export function LoginForm() {
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
      const [dataLoginForm, setDataLoginForm] = useState({
        email: "",
        password: "",
      });
      const handleSubmitLoginUser = async (e) => {
        e.preventDefault();
        try {
          const response = await fetchLogin(dataLoginForm.email, dataLoginForm.password);
          localStorage.setItem("tokenUser", response.token);
          localStorage.setItem("User", JSON.stringify(response.user));
          if (response.success) {
            return navigate("/miCuenta");
          }
        } catch (error) {
          console.error("Error al hacer login", error);
        }
      };
      const handleChange = (e) => {
        setDataLoginForm({ ...dataLoginForm, [e.target.name]: e.target.value });
      };
    return (
              <Form
                data={dataFormLogin}
                handleSubmit={handleSubmitLoginUser}
                handleChange={handleChange}
              />
    )
}

export default LoginForm