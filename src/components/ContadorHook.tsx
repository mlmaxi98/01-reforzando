import useCounter from "../hooks/useCounter";

const ContadorHook = () => {
    const { acumular, valor } = useCounter();
    return (
        <>
            <h3>
                Contador con Hook: <small>{valor}</small>
            </h3>
            <button
                className="btn btn-primary"
                onClick={() => {
                    acumular(1);
                }}
            >
                +1
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={() => {
                    acumular(-1);
                }}
            >
                -1
            </button>
        </>
    );
};

export default ContadorHook;

