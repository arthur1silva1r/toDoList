import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/Login.css';
import { Button, Input } from 'reactstrap';

function Login() {
  const [email, setEmail] = useState('');
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
    localStorage.setItem('emailTodo', JSON.stringify(email));
    history.push('/list');
  }

  return (
    <div className="login-page">
      <h1 className="login-title">Sign In &#128221;</h1>
      <form className="login-form">
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
        />
        <Button
          color="primary"
          outline
          disabled={ !validateEmail(email) }
          onClick={ onSubmitClick }
        >
          Entrar
        </Button>
      </form>
    </div>
  );
}

export default Login;