const TiposBasicos = () => {
  const nombre: string = "Fernando";
  const edad: number = 35;
  const activo: boolean = true;

  const poderes = ["Velocidad", "Volar", "Respirar en el agua"];

  //const powers: string[] = [];

  //!powers.push(1); No se puede meter otros tipos de variables que no sean un string

  return (
    <>
      <h3>Tipos básicos</h3>
      <h3>
        {nombre}, {edad}, {activo ? "activo" : "no activo"}
        <br />
        {poderes.join(", ")}
      </h3>
    </>
  );
};

export default TiposBasicos;
