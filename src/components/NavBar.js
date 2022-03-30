import CarWidget from "./CarWidget";

const NavBar = ()=> {
    return (
      <>
        <nav>
          <p>
            Todo-Informatica
          </p>
          <div>
            <a href="#">
            Categoria 1
            </a>
            <a href="#">
            Categoria 2
            </a>
            <a href="#">
            Categoria 3
            </a>
          </div>
          <CarWidget/>
        </nav>
      </>
    );
  }

  export default NavBar