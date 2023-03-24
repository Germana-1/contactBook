import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserLogin } from "@/interfaces/users";
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

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginForm: React.FC<Props> = ({ isOpen, onClose }) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("E-mail obrigatório*")
      .email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUserLogin>({ resolver: yupResolver(schema) });

  const onFormSubmit = (formData: IUserLogin) => {
    console.log(formData);
    reset();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailError = Boolean(errors.email);
  const passwordError = Boolean(errors.password);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Flex>
          <ModalHeader>Login</ModalHeader>
          <Spacer />
          <CloseButton
            onClick={() => {
              onClose(), setEmail(""), setPassword(""), reset();
            }}
          />
        </Flex>

        <ModalBody>
          <FormControl isRequired isInvalid={emailError} id="email">
            <Flex>
              <FormLabel>E-mail</FormLabel>
            </Flex>

            <Input
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
                type={showPassword ? "text" : "password"}
                {...register("password")}
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
              <InputRightElement>
                <Button
                  variant={"ghost"}
                  onClick={() => {
                    setShowPassword((showPassword) => !showPassword);
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

export default LoginForm;
