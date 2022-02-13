import { useState } from 'react';
import PropTypes from 'prop-types';
import ContextList from './ContextList';

function ListProvider({ children }) {
  const [emailLocal, setEmailLocal] = useState(JSON.parse(localStorage.getItem('emailLocal')));
  const [aparecerForm, setAparecerForm] = useState(false);
  const [task, setTask] = useState({});
  const valor = {
    emailLocal,
    setEmailLocal,
    task,
    setTask,
    aparecerForm,
    setAparecerForm,
  }
  return (
    <ContextList.Provider value={valor}>
      { children }
    </ContextList.Provider>
  );
}

ListProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default ListProvider;
