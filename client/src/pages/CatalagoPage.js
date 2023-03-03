import React, { useEffect, useState } from "react";
import api from "../services/api";


const CatalogoPage = () => {

    const [catalogo, setCatalogo] = useState([])

    useEffect(() => {
        const getCatalago = async () => {
            var { data } = await api.get(`/filmes`);
            setCatalogo(data.data);
        }

        getCatalago();
    }, [])

    return (<div>
        <h1>Últimos filmes adicionados</h1>
        <ul>
            {
                catalogo.length !== 0 ? catalogo.map(c => <li>{c.titulo}</li>) : <li>Carregando...</li>
            }
        </ul>
    </div>)
}

export default CatalogoPage;