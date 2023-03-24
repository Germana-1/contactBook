import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  CloseButton,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { IUserSignup } from "@/interfaces/users";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterForm: React.FC<Props> = ({ isOpen, onClose }) => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Nome completo obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    phone: yup.string().required("Telefone obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUserSignup>({ resolver: yupResolver(schema) });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");

  const nameError = name === "";
  const emailError = Boolean(errors.email);
  const phoneError = phone === "";
  const passwordError = password === "";

  const onFormSubmit = (formData: IUserSignup) => {
    console.log(formData);
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Flex>
          <ModalHeader>Cadastro</ModalHeader>
          <Spacer />
          <CloseButton
            onClick={() => {
              onClose(),
                setName(""),
                setPhone(""),
                setEmail(""),
                setPassword(""),
                reset();
            }}
          />
        </Flex>

        <ModalBody>
          <FormControl isRequired isInvalid={nameError} id="name">
            <FormLabel>Nome completo</FormLabel>
            <Input
              required
              type="text"
              {...register("fullName")}
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name}
            />
            <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={phoneError} id="phone">
            <FormLabel>Telefone</FormLabel>
            <Input
              required
              type="tel"
              {...register("phone")}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              value={phone}
            />
            <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={emailError} id="email">
            <FormLabel>E-mail</FormLabel>
            <Input
              required
              type="email"
              {...register("email")}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={passwordError} id="password">
            <FormLabel>Senha</FormLabel>
            <InputGroup>
              <Input
                required
                type={showPassword}
                {...register("password")}
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
              <InputRightElement>
                <Button
                  variant={"ghost"}
                  onClick={() => {
                    showPassword === "password"
                      ? setShowPassword("text")
                      : setShowPassword("password");
                  }}
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSubmit(onFormSubmit)}>Entrar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RegisterForm;
