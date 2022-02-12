import PropTypes from 'prop-types';
import ContextList from './ContextList';

function ListProvider({ children }) {
  return (
    <ContextList.Provider value={''}>
      { children }
    </ContextList.Provider>
  );
}

ListProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default ListProvider;
