import * as yup from "yup";

export const registerSchema = yup.object().shape({
  fullName: yup.string().required("Nome obrigatório*"),

  email: yup.string().required("E-mail obrigatório*").email("E-mail inválido"),

  password: yup
    .string()
    .required("Senha obrigatória*")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve ter no minimo 8 digitos"),
  confirmPass: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
  phone: yup.string().required("Telefone obrigatório*"),
});
