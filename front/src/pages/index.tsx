import { useState } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import RegisterForm from "@/components/modalRegisterForm";
import LoginForm from "@/components/modalLoginForm";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formType, setFormType] = useState("login");

  const handleLoginClick = () => {
    setFormType("login");
    onOpen();
  };

  const handleRegisterClick = () => {
    setFormType("register");
    onOpen();
  };

  return (
    <>
      <Button onClick={handleLoginClick}>Login</Button>
      <Button onClick={handleRegisterClick}>Cadastre-se</Button>
      {formType === "login" ? (
        <LoginForm isOpen={isOpen} onClose={onClose} />
      ) : (
        <RegisterForm isOpen={isOpen} onClose={onClose} />
      )}
    </>
  );
}
