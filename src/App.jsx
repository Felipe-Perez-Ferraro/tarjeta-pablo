import React, { useState } from 'react';
import TarjetaPaciente from './components/TarjetaPaciente';
import './App.css';

function App() {
  const [pacientes, setPacientes] = useState([
    {
      id: 1,
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3F4OLuF-KG0V_M7otDaW4DaLTcDpF5XY5Nw&s',
      nombre: 'Ignacio Correa',
      edad: 50,
      genero: 'Masculino',
      direccion: {
        calle: 'Barrio nacho',
        altura: 143,
        localidad: 'Morón',
      },
      trabaja: true,
    },
    {
      id: 2,
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3F4OLuF-KG0V_M7otDaW4DaLTcDpF5XY5Nw&s',
      nombre: 'Martín Bercaitz',
      edad: 21,
      genero: 'Masculino',
      direccion: {
        calle: 'Alsina',
        altura: 500,
        localidad: 'Ramos Mejía',
      },
      trabaja: false,
    },
    {
      id: 3,
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3F4OLuF-KG0V_M7otDaW4DaLTcDpF5XY5Nw&s',
      nombre: 'Felipe Perez Ferraro',
      edad: 21,
      genero: 'Masculino',
      direccion: {
        calle: 'Remedios Escalada de San Martín',
        altura: 287,
        localidad: 'Morón',
      },
      trabaja: true,
    },
  ]);

  return (
    <section className="home_section">
      <h1 className="home_title">Lista de Pacientes</h1>
      <article className="home_article">
        {pacientes.map((paciente) => (
          <TarjetaPaciente key={paciente.id} data={paciente} />
        ))}
      </article>
    </section>
  );
}

export default App;
