import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/Login.css';
import { Button, Input } from 'reactstrap';
import { FcTodoList } from 'react-icons/fc';

function Register() {
  const arrayUsers = JSON.parse(localStorage.getItem('users'));
  if (arrayUsers === null) {
    localStorage.setItem('users', JSON.stringify([]));
  }
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const history = useHistory();

  function emailHandler({ target }) {
    setEmail(target.value);
  }

  function senhaHandler({ target }) {
    setSenha(target.value);
  }

  function nomeHandler({ target }) {
    setNome(target.value);
  }

  function validateEmail(email) {
    let regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail) ) {
      return true; 
    } else {
      return false; 
    }
  }

  function registerChecker(newUser){
    const existeUsuario = arrayUsers.find((user) => user.emailUser === newUser.emailUser);
    if (existeUsuario) {
      return true;
    }
    return false
  }

  function onSubmitClick(){
    const newUser = {
      nomeUser: nome,
      emailUser: email,
      senhaUser: senha,
    };
    if (registerChecker(newUser)) {
      alert("Usuario já existe")
    } else {
      if (arrayUsers) {
        localStorage.setItem('users', JSON.stringify([...arrayUsers, newUser]))
      } else {
        localStorage.setItem('users', JSON.stringify([newUser]))
      };
      history.push('/signin');
    }
  }

  return (
    <div className="login-page">
      <h1 className="login-title">Sign Up <FcTodoList/></h1>
      <form className="login-form">
      <Input
          type="text"
          name="nome"
          placeholder="Digite seu nome aqui"
          className="login-input"
          onChange={ (evt) => nomeHandler(evt) }
        />
        <Input
          type="text"
          name="email"
          placeholder="Digite seu email aqui"
          className="login-input"
          onChange={ (evt) => emailHandler(evt) }
        />
        <Input
          type="password"
          name="senha"
          placeholder="Digite sua senha aqui"
          className="login-input"
          onChange={ (evt) => senhaHandler(evt) }
        />
        <Button
          color="light"
          outline
          disabled={ !validateEmail(email) }
          onClick={ onSubmitClick }
        >
          Registrar
        </Button>
      </form>
    </div>
  );
}

export default Register;