const express = require('express');
const router = express.Router();
const filmeController = require('../controllers/filmeController');

router.get('/', filmeController.listarFilmes);
router.get('/:id', filmeController.buscarFilmePorId);
router.post('/', filmeController.criarFilme);
router.put('/:id', filmeController.atualizarFilme);
router.delete('/:id', filmeController.removerFilme);

module.exports = router;