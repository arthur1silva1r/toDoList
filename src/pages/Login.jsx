import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/Login.css';
import { Button, Input, Alert } from 'reactstrap';
import { FcTodoList } from 'react-icons/fc';
import ContextList from '../context/ContextList';

function Login() {
  const { setEmailLocal } = useContext(ContextList);
  const [email, setEmail] = useState('');
  const [alertAppear, setAlertAppear] = useState(false);
  const arrayUsers = JSON.parse(localStorage.getItem('users'));
  const history = useHistory();

  function emailHandler({ target }) {
    setEmail(target.value);
  }

  function validateEmail(email) {
    let regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
      return true; 
    } else {
      return false; 
    }
  }

  function onSubmitClick(){
    if (arrayUsers) {
      const existeUsuario = arrayUsers.find((user) => user.emailUser === email);
      if (existeUsuario) {
        setEmailLocal(email)
        history.push('/list');
      } else {
        setAlertAppear(true);
      }
    }
  }

  return (
    <div className="login-page">
      <h1 className="login-title">Sign In <FcTodoList /></h1>
      <form className="login-form">
        <Input
          type="text"
          name="email"
          placeholder="Digite seu email aqui"
          className="login-input"
          onChange={ (evt) => emailHandler(evt) }
        />
        {" "}
        <Input
          type="password"
          name="senha"
          placeholder="Digite sua senha aqui"
          className="login-input"
        />
        {" "}
        <Button
          color="light"
          outline
          disabled={ !validateEmail(email) }
          onClick={ onSubmitClick }
        >
          Entrar
        </Button>
        <a
          className="cadastrese" 
          href="/signup"
        >
          Não possui uma conta? Clique aqui
        </a>
      </form>
      {
        !alertAppear ? null : (
          <>
            <br />
            <Alert
              color="primary"
            >
              <p>Usuário não existe</p>
              <p>Realize o cadastro para ter acesso a lista de tarefas</p>
            </Alert>
          </>
        ) 
      }
    </div>
  );
}

export default Login;