import React, { useState } from "react";

const Contacto = () => {

const [correo, setCorreo] = useState("");
const [descripcion, setDescripcion] = useState("");

const handleBotonEnviar = () => {
    alert(`Correo: ${correo} Descripción: ${descripcion}`);
}

  return (
    <div className="home">
      <h3>Cuentanos en qué te podemos ayudar</h3>
      <span>Correo:</span>
      <input
        type="text"
        className="form-control"
        placeholder="name@example.com"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      ></input>
      <span>Descripción</span>
      <textarea className="form-control"
      value={descripcion}
      onChange={(e) => setDescripcion(e.target.value)}
      ></textarea>
      <button className="btn btn-danger" onClick={handleBotonEnviar}>Enviar</button>
    </div>
  );
};

export default Contacto;
