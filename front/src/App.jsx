import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";

import { RegisterPage } from "./pages/RegisterPage";
import { DashboardPage } from "./pages/DashboardPage";
import { GlobalStyle } from "./styles/global";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <ToastContainer autoClose={2000} color={"black"} />
    </>
  );
}

export default App;
