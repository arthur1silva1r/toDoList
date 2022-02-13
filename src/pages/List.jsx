import { useContext } from 'react';
import '../style/List.css';
import { Button } from 'reactstrap';
import ContextList from '../context/ContextList';
import Header from '../components/Header';
import FormTask from '../components/FormTask';

function List() {
  const { aparecerForm } = useContext(ContextList)
  return (
    <>
      <Header />
      {
        !aparecerForm ? null : <FormTask />
      }
    </>
  );
}

export default List;