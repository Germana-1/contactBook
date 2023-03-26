import * as yup from "yup";

export const schema = yup.object().shape({
  fullName: yup.string().required("Nome obrigatório*"),

  email: yup.string().required("E-mail obrigatório*").email("E-mail inválido"),

  phone: yup.string().required("Telefone obrigatório*"),
});
