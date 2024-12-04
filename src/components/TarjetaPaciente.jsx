import React from 'react';

function TarjetaPaciente({ data }) {
  const { imagen, nombre, edad, genero, direccion, trabaja } = data;

  return (
    <div className="home_card">
      <div className="card_header">
        <figure className="header_img_container">
          <img src={imagen} alt={`paciente_${nombre}`} className="header_img" />
        </figure>

        <h2 className="header_title">{nombre}</h2>
      </div>
      <ul className="card_content_list">
        <li className="content_list_item">Edad: {edad}</li>
        <li className="content_list_item">Género: {genero}</li>
        <li className="content_list_item">
          Dirección: {direccion.calle} {direccion.altura} -{' '}
          {direccion.localidad}
        </li>
        <li className="content_list_item">Trabaja? {trabaja ? 'Si' : 'No'}</li>
      </ul>
    </div>
  );
}

export default TarjetaPaciente;
