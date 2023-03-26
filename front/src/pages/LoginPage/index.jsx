import { ContainerStyled, HomeStyled } from "../../styles/container";
import { LinkRegisterStyled } from "../../styles/link";
import { ButtonPrimary } from "../../styles/button";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validation/login";

export const LoginPage = () => {
  const { onSubmitFunctionLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <>
      <HomeStyled>
        <figure>
          <img src={process.env.PUBLIC_URL + "/agenda.png"} alt="home" />
        </figure>

        <ContainerStyled>
          <h1>Login</h1>
          <form className="form" onSubmit={handleSubmit(onSubmitFunctionLogin)}>
            <label htmlFor="email">Email</label>
            <input
              placeholder="Digite aqui seu email"
              id="email"
              {...register("email")}
            />
            <span>{errors.email?.message}</span>

            <label htmlFor="password">Senha</label>
            <input
              type={"password"}
              placeholder="Digite aqui sua senha"
              id="password"
              {...register("password")}
            />
            <span>{errors.password?.message}</span>

            <ButtonPrimary type="submit">Entrar</ButtonPrimary>
          </form>
          <p>Ainda não possui uma conta?</p>
          <LinkRegisterStyled to={"/register"}>Cadastre-se</LinkRegisterStyled>
        </ContainerStyled>
      </HomeStyled>
    </>
  );
};
