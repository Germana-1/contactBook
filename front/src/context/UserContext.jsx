import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext({});

export const Provider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const token = window.localStorage.getItem("@TOKEN");

  const onSubmitFunction = async () => {
    try {
      const response = await axios.get("http://localhost:3002/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
      if (response) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      if (error) {
        window.localStorage.clear();
      }
    }
  };

  useEffect(() => {
    token ? onSubmitFunction() : navigate("/");
  }, [token]);

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  const onSubmitFunctionRegister = async (registerData) => {
    try {
      await api.post("/users", registerData);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error) {
        if (error.response.status === 409) {
          toast.error("Usuário já foi cadastrado");
        }
      }
    }
  };

  const onSubmitFunctionLogin = async (loginData) => {
    try {
      const { data } = await api.post("/login", loginData);
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (error.response.status === 403) {
        console.log("Email e/ou senha inválidos");
        toast.error("Email e/ou senha inválidos");
      }
    }
  };

  async function updateUser(userData) {
    const token = window.localStorage.getItem("@TOKEN");
    const data = {
      fullName: userData.fullName,
      phone: userData.phone,
      email: userData.email,
    };

    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const updatedUser = await api.patch(`/users`, data);

        setUser({ ...updatedUser.data });
      } catch (error) {
        console.log(error);
        if (error) {
          toast.error("Ops! Algo deu errado");
        }
      }
    }
  }

  async function deleteUser() {
    const token = window.localStorage.getItem("@TOKEN");

    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;

        await api.delete(`/users`);
        logout();
      } catch (error) {
        console.log(error);
        if (error) {
          toast.error("Ops! Algo deu errado");
        }
      }
    }
  }

  return (
    <UserContext.Provider
      value={{
        onSubmitFunctionLogin,
        onSubmitFunctionRegister,
        logout,
        user,
        updateUser,
        deleteUser,
        showDeleteModal,
        setShowDeleteModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
