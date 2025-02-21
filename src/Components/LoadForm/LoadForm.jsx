import { useState } from "react";
import Form from "../FormBase/FormBase";
export function LoadForm() {
    const dataForm = {
        title: "Solicitar Prestamo",
        subTitle: "Ingrese el monto que desea solicitar",
        inputs: [
          { label: "Monto", type: "number", name: "monto" },
        ],
        nameButton: "Solicitar",
      };
      const [dataApplyLoan, setDataApplyLoan] = useState({
        monto: "",
      });
      const handleSubmitLoginUser = (e) => {
        e.preventDefault();
        console.log(
          dataApplyLoan,
          "enviar peticion al back para que el back la informacion de la solicitud"
        );
      };
      const handleChange = (e) => {
        setDataApplyLoan({ ...dataApplyLoan, [e.target.name]: e.target.value });
      };

    return (
        <Form
        data={dataForm}
        handleSubmit={handleSubmitLoginUser}
        handleChange={handleChange}
      />
    )
}

export default LoadForm