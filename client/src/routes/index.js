import React from 'react';
import { Routes, Route } from "react-router-dom";
import CadastroPage from '../pages/CadastroPage';
import CatalogoPage from '../pages/CatalagoPage';
import Layout from '../pages/Layout';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route exact path="catalogo" element={<CatalogoPage />} />
                <Route path="cadastro" element={<CadastroPage />} />
            </Route>
        </Routes>
    );
};

export default Routers;