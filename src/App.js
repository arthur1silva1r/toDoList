import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import ListProvider from './context/ListProvider';
import Login from './pages/Login';
import List from './pages/List'

function App() {
  return (
    <ListProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login }/>
          <Route exact path="/list" component={ List }/>
        </Switch>
      </BrowserRouter>
    </ListProvider>
  );
}

export default App;
