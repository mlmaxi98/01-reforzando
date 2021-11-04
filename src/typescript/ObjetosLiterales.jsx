const ObjetosLiterales = () => {

    const persona = {
        nombre: 'Joaquín',
        edad: 23,
        direccion: {
            pais: 'Argentina',
            num: 10,
        }
    }
    persona.nombreCompleto = "JMC"
    return (
        <>
            <h3>Objetos literales</h3>
            {/* {JSON.stringify(persona)} */}
            <code><pre>{JSON.stringify(persona, null, 2)}</pre></code>
        </>
    )
}

export default ObjetosLiterales
