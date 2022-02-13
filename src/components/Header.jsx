import { useContext } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Button,
} from 'reactstrap';
import ContextList from '../context/ContextList';
import '../style/List.css';

function Header() {
  const { emailLocal, setAparecerForm, aparecerForm } = useContext(ContextList)
  function mudaAparencia() {
    setAparecerForm(!aparecerForm);
  }
  return (
    <div>
      <Navbar
        color="light"
        expand="md"
        light
      >
        
        <NavbarBrand href="/list">
          <h5><span id="emoji-list">&#128209;</span>To Do List</h5>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/favoritas">
                Favoritas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/arthur1silva1r/toDoList">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  Já Realizadas
                </DropdownItem>
                <DropdownItem>
                  Por Fazer
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset List
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button
            className="btn-space"
            onClick={ mudaAparencia }
            outline
          >
            Adicionar Tarefa
          </Button>
          <br/>
          <Nav
            navbar
          >
            <NavItem>
              <NavLink href="/profile/">
                {
                  emailLocal
                }
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;