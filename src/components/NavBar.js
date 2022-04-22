import React from "react";
import { Link } from "react-router-dom";
import CarWidget from "./CarWidget";

const NavBar = ()=> {

  
    return (
      
        <nav>
          
        <p><Link to='/'>Todo-Informatica</Link> </p>
          
          <div>
            <Link to="/category/procesadores">Procesadores</Link>
    
            <Link to="/category/placas-de-video">Placas de video</Link>

            <Link to="/category/motherboards">Motherboards</Link>    
          </div>
          <CarWidget/>
        </nav>
      
    );
  }

  export default NavBar