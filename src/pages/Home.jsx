import { Button } from 'reactstrap';
import '../style/Home.css';

function Home() {
  localStorage.setItem('users', JSON.stringify([]));
  return (
    <div className="home">
      <h1>
        To Do List, by: Arthur da Silva Rodrigues
      </h1>
      <div className="buttons">
        <Button 
          href="/signin"
          color="light"
          outline
        >
          Sign In
        </Button>
        {" "}
        <Button 
          href="/signup"
          color="light"
          outline
        >
          Sign Up
        </Button>
      </div>
      <div className="div-sec-one">
        <section className="sec-one">
          <h2>Objetivo</h2>
          <p className="p-obj">
              Tive como objetivo desta aplicação por em prática um pouco dos conhecimentos adquiridos no módulo de Front-end
            do curso de Desenvolvimento Web da Trybe. Aqui usando React.js, Context API e 
            React Hooks, busquei desenvolver uma aplicação que simula uma lista de tarefas.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;