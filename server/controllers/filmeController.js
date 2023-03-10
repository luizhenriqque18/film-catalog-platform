const fs = require("fs");
const Filme = require('../models/Filme');

exports.listarFilmes = async (req, res) => {
    const { query } = req;
    const { page, size, sort = 'created_at,desc' } = query;
    const pagination = {
        page: parseInt(page) | 0,
        size: parseInt(size) | 0,
        sort: convertObject(sort),
        countPage: 0,
        data: []
    }

    try {
        const count = await Filme.count();
        const filmes = await Filme.find()
            .sort(pagination.sort)
            .skip(pagination.size * (pagination.page - 1))
            .limit(pagination.size);

        pagination.data = filmes;
        pagination.countPage = Math.ceil(count / pagination.size) | 0;

        res.status(200).json(pagination);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao buscar filmes.' });
    }
};

exports.buscarFilmePorId = async (req, res) => {
    try {
        const filme = await Filme.findById(req.params.id);
        res.status(200).json(filme);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar filme.' });
    }
};

exports.buscarCapaFilmePorPath = async (req, res) => {
    try {
        const filme = await Filme.findById(req.params.id);
        res.status(200).sendFile(filme.imagem.filename, { root: 'public/images' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar filme.' });
    }
};

exports.criarFilme = async (req, res) => {
    const {filename} = req.file;
    const body = formatJsonStringForJSON(req.body);
    try {
        const filme = new Filme(body);
        filme.imagem = {filename}
        await filme.save();
        res.status(201).json(filme);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar filme.' });
    }
};

exports.atualizarFilme = async (req, res) => {
    try {
        const filme = await Filme.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(filme);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar filme.' });
    }
};

exports.removerFilme = async (req, res) => {
    const directoryPath = __basedir + "/public/images/";

    try {
        const filme = await Filme.findByIdAndDelete(req.params.id);
        
        fs.unlinkSync(directoryPath + filme.imagem.filename);

        res.status(200).json({message: 'Registro deletado com Sucesso!'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao remover filme ou imaga da capa' });
    }
};

const convertObject = (sort = '') => {
    const [key, value] = sort.split(',')
    const result = {};
    result[key] = value;
    return result;
}

const formatJsonStringForJSON = (data) => {
    var result = JSON.parse(data.jsonString);
    return result
}