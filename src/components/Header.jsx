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
} from 'reactstrap';

function Header() {
  return (
    <div>
      <Navbar
        color="light"
        expand="md"
        light
      >
        <span id="emoji-list">&#128209;</span>
        <NavbarBrand href="/list">
          To Do List
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/favoritas/">
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
          <Nav
            navbar
          >
            <NavItem>
              <NavLink href="/profile/">
                {
                  JSON.parse(localStorage.getItem('emailTodo'))
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