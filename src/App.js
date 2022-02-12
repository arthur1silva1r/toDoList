import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import ListProvider from './context/ListProvider';
import Login from './pages/Login';
import List from './pages/List'
import Register from "./pages/Register";
import Home from './pages/Home';

function App() {
  return (
    <ListProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home }/> 
          <Route exact path="/signin" component={ Login }/>
          <Route exact path="/signup" component={ Register }/>
          <Route exact path="/list" component={ List }/>
        </Switch>
      </BrowserRouter>
    </ListProvider>
  );
}

export default App;
