import React, { useState } from "react";

const Saludo =()=>{
    const [nombreP, setNombreP]= useState("")
    const[muestraSaludo, setMostrarSaludo]= useState(false)

    const handleAceptar =()=>
        {setMostrarSaludo(true);
}
    return (
        <section>

            <label htmlFor = "Nombre">Nombre:</label>
            <input
            type="text"
            id="nombre"
            value= {nombreP}
            onChange={(event)=> setNombreP(event.target.value)}
            />
        <button onClick={handleAceptar}> Aceptar</button>
        {MostrarSaludo && <h1>hola, {nombreP || "invitado"}</h1>}

        </section>
    );



};
export default Saludo;