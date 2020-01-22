import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { RegisterRequest } from '../../store/modules/auth/actions';
import Logo from '../../assets/img/logo_ufmt_negativo_Prancheta.svg';

// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Informe um e-mail em formato válido')
    .required('O campo e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  username: Yup.string().required('O campo nome é obrigatório'),
});

export default function Register() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  function handleSubmit({ username, email, password }) {
    dispatch(RegisterRequest(username, email, password));
  }
  return (
    <>
      <img src={Logo} alt="Logotipo da UFMT" />
      <h1>Registro de Usuário</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="username" type="text" placeholder="Nome" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">{loading ? 'Aguarde' : 'Salvar'}</button>
      </Form>
    </>
  );
}
