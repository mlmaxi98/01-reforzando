interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  num: number;
}
const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "Joaquín",
    edad: 23,
    direccion: {
      pais: "Argentina",
      num: 10,
    },
  };

  return (
    <>
      <h3>Objetos literales</h3>
      {/* {JSON.stringify(persona)} */}
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};

export default ObjetosLiterales;
