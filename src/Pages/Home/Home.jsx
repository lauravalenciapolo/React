import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import LoginForm from "../../Components/LoginForm/LoginForm";

function Home() {

  return (
    <div>
      <Navbar />
      <h1>Bienvenido a Makers</h1>
      <LoginForm />
    </div>
  );
}

export default Home;
