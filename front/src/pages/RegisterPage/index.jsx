import { ContainerStyled } from "../../styles/container";
import { LinkStyled } from "../../styles/link";
import { ButtonPrimary } from "../../styles/button";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validation/register";

export const RegisterPage = () => {
  const { onSubmitFunctionRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  return (
    <>
      <ContainerStyled className="register">
        <h1>Crie sua conta</h1>
        <form
          className="form"
          onSubmit={handleSubmit(onSubmitFunctionRegister)}
        >
          <label htmlFor="name">Nome</label>
          <input
            placeholder="Digite aqui seu nome"
            id="name"
            {...register("fullName")}
          />
          <span> {errors.fullName?.message}</span>

          <label htmlFor="email">Email</label>
          <input
            placeholder="Digite aqui seu email"
            id="email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="phone">Telefone</label>
          <input
            placeholder="Digite aqui seu telefone"
            id="phone"
            {...register("phone")}
          />
          <span>{errors.phone?.message}</span>

          <label htmlFor="password">Senha</label>
          <input
            type={"password"}
            placeholder="Digite aqui sua senha"
            id="password"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>

          <label htmlFor="confirmPass">Confirmar senha</label>
          <input
            type={"password"}
            placeholder="Confirme sua senha"
            id="confirmPass"
            {...register("confirmPass")}
          />
          <span>{errors.confirmPass?.message}</span>

          <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
          <LinkStyled to={"/"}>Login</LinkStyled>
        </form>
      </ContainerStyled>
    </>
  );
};
