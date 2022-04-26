import React from "react";
import { Link } from "react-router-dom";

const BackHome = ()=>{
    return(
        <Link to="/"><button className="btnDetalle">Volver al inicio</button></Link>
    )
}

export default BackHome