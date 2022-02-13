import { useContext, useState } from 'react';
import ContextList from '../context/ContextList';
import '../style/FormTask.css';

function FormTask() {
  const [taskName, setTaskName] = useState('');
  const [taskUrlThumb, setTaskUrlThumb] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [taskImpor, setTaskImpor] = useState('');
  const {setTask, emailLocal} = useContext(ContextList);

  function imporHandler({ target }) {
    setTaskImpor(target.value);
  }

  function taskNameHandler({ target }) {
    setTaskName(target.value);
  }
  function taskUrlThumbHandler({ target }) {
    setTaskUrlThumb(target.value);
  }

  function taskDescHandler({ target }) {
    setTaskDesc(target.value);
  }

  function addTask() {
    const task = {
      email: emailLocal,
      nome: taskName,
      thumb: taskUrlThumb,
      descricao: taskDesc,
      importancia: taskImpor
    };
    setTask(task);
    const arrayTask = JSON.parse(localStorage.getItem('tasks'));
    if (arrayTask) {
      localStorage.setItem('tasks', JSON.stringify([...arrayTask, task]))
    } else {
      localStorage.setItem('tasks', JSON.stringify([task]))
    }
  }

  return (
    <form className="form-task">
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Nome da tarefa"
            value={ taskName }
            required
            onChange={ (evt) => taskNameHandler(evt) }
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="URL"
            value={ taskUrlThumb }
            onChange={ (evt) => taskUrlThumbHandler(evt)}
          />
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col form-group">
          <label htmlFor="exampleFormControlTextarea1">Descrição da tarefa</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            required
            value={ taskDesc }
            onChange={ (evt) => taskDescHandler(evt)}
          >
          </textarea>
        </div>
        <br/>
        <div className="col form-inline">
          <div className="custom-control custom-checkbox my-1 mr-sm-2">
            <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Importâcia</label>
            {" "}
            <select
              className="custom-select my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              onChange={ (evt) => imporHandler(evt) }
              value={ taskImpor }
            >
              <option defaultValue>Choose...</option>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="warning">Warning</option>
            </select>
          </div>
        </div>
      </div>
      <br/>
      <button
        type="submit"
        className="btn btn-primary my-1"
        onClick={ addTask }
      >
        Adicionar Tarefa
      </button>
    </form>
  );
}

export default FormTask