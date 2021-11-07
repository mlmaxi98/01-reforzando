import { useState } from "react"
import useForm from "../hooks/useForm"

const Formularios = () => {

    const { email, onChange, password, formulario } = useForm({
        email: 'test@test.com',
        password: '123'
    });

    return (
        <>
            <h3>Formularios</h3>
            <input
                type="text"
                className="form form-control"
                placeholder="Email"
                value={email}
                onChange={({ target }) => { onChange(target.value, 'email') }}
            />
            <input type="text"
                className="form form-control mt-2 mb-2"
                placeholder="Password"
                value={password}
                onChange={({ target }) => { onChange(target.value, 'password') }}
            />

            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}

export default Formularios
