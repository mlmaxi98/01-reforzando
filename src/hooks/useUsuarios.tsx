import { useEffect, useRef, useState } from "react"
import reqResApi from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes'

const useUsuarios = () => {

    const pageRef = useRef(1)
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const cargarUsuarios = async () => {

        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: pageRef.current
            }
        })

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data)
        }
        else {
            alert('No hay más registros')
            pageRef.current--
        }

    }

    useEffect(() => {
        cargarUsuarios()
    }, [])

    const paginaSiguiente = () => {
        pageRef.current++
        cargarUsuarios()
    }
    const paginaAnterior = () => {
        if (pageRef.current > 1) {
            pageRef.current--
            cargarUsuarios()
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior,
    }
}
export default useUsuarios;
