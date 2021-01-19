import React, { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  const [fecha, setFecha] = useState("");

  const agregar = () => {
    setContador(contador + 1);
  };

  const quitar = () => {
    setContador(contador - 1);
  };

  const reset = () => {
    setContador(0);
  };

  const ultimoClick = () => {
    setFecha(new Date().toLocaleString());
  };

  return (
    <div style={{ borderColor: "white", borderStyle: "solid" }} onClick={() => ultimoClick()}>
      <span style={{ fontSize: 50, color: "#333" }}>{contador}</span>
      <span style={{ marginLeft: 22, color: "#ccc" }}>{fecha}</span>
      <br />
      <button onClick={() => agregar()} className="arriba">
        Agregar
      </button>
      <button onClick={() => quitar()} className="abajo">
        Quitar
      </button>
      <button onClick={() => reset()} className="reset">
        Reset
      </button>
    </div>
  );
}