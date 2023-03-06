import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import api from "../services/api";
import '../css/CatalogoPage.css';

const CatalogoPage = () => {

    const [catalogo, setCatalogo] = useState({ data: [] })
    const [pagination, setPagination] = useState({ page: 1, size: 10 })

    useEffect(() => {
        getCatalago(pagination)
    }, [pagination])

    const getCatalago = async ({ page, size }) => {
        var { data } = await api.get(`/filmes`, {
            params: { page, size }
        });
        setCatalogo(data);
    }

    const getCapaFilme = (id) => {
        return `${api.getUri()}/filmes/${id}/capa`;
    }

    function handlePage(key = 'next') {
        const { page } = pagination
        const modification = {
            previous: page - 1,
            next: page + 1
        }
        setPagination({ ...pagination, ...{ page: modification[key] } });
    }

    function enabledPrevious() {
        return pagination.page <= 1
    }

    function enabledNext() {
        const { countPage } = catalogo;
        return countPage <= pagination.page
    }

    return (<div className="catalago-page">
        <header className="catalago-page__header">
            <h1 className="catalago-page__header__title">Últimos filmes adicionados</h1>
            <div className="catalago-page__nav">
                <div className="catalago-page__nav__pagination">
                    <Button disabled={enabledPrevious()} onClick={() => handlePage('previous')}>Anterio</Button>
                    <Button disabled={enabledNext()} onClick={() => handlePage()}>Próximo</Button>
                </div>
                <h3 className="catalago-page__nav__title">Próximos Filmes</h3>
            </div>
        </header>
        <div className="grid">
            {
                catalogo.data.length !== 0 ? catalogo.data.map((c, index) => {
                    return (
                        <Card key={c._id} title={c.titulo} description={''} image={getCapaFilme(c._id)} />
                    )
                }) : <li>Carregando...</li>
            }
        </div>
    </div>)
}

export default CatalogoPage;