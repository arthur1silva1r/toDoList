import { useState } from 'react';
import PropTypes from 'prop-types';
import ContextList from './ContextList';

function ListProvider({ children }) {
  const [emailLocal, setEmailLocal] = useState('');
  const valor = {
    emailLocal,
    setEmailLocal,
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
