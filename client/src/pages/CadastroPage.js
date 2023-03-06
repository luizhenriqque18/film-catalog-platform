import React from "react";
import { Formik, Field, Form } from 'formik';
import '../css/CadastroPage.css';

import api from "../services/api";
import Button from "../components/Button";

const CadastroPage = () => {

    const createFilme = async (data) => {

        const file = data.imagem;
        delete data.imagem;

        if (!file) {
            alert("Capa de filme obrigatoria")
        } else {
            const jsonForFormDate = new FormData()
            jsonForFormDate.append('jsonString', JSON.stringify(data));
            jsonForFormDate.append('file', file);

            await api.post('/filmes', jsonForFormDate, { headers: { "Content-Type": "multipart/form-data" } });
        }
    }


    return (<div className="cadastro-page">
        <Formik
            initialValues={{
                titulo: '',
                descricao: '',
                dataLancamento: '',
                imagem: null
            }}
            onSubmit={async (values, actions) => {
                await createFilme(values)
                actions.resetForm();
                actions.res("imagem", null)
            }}
        >
            {
                (formik) => {
                    return <Form className="form">
                        <label className="form__label" htmlFor="titulo">Titulo</label>
                        <Field className="form__input" id="titulo" name="titulo" placeholder="Nome do Filme" />

                        <label className="form__label" htmlFor="descricao">Descricao</label>
                        <Field className="form__input" id="descricao" name="descricao" placeholder="Descricao di Filme" component="textarea" />

                        <label className="form__label" htmlFor="DataLancamento">Data Lançamento</label>
                        <Field className="form__input"
                            id="DataLancamento"
                            name="dataLancamento"
                            placeholder="DD/MM/YYYY"
                            type="date"
                        />

                        <label className="form__label" htmlFor="capa">Carregar capa do filme</label>
                        <input className="form__input" id="file"
                            name="capa"
                            type="file"
                            accept="image/*"
                            onChange={(event) => {
                                formik.setFieldValue(
                                    "imagem",
                                    event.currentTarget.files[0]
                                );
                            }}
                        />
                        <Button primary outline type="submit">Cadastrar</Button>
                    </Form>
                }
            }
        </Formik>
    </div>)
}

export default CadastroPage