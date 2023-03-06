const { randomUUID } = require('crypto');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const filmeController = require('../controllers/filmeController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const filename = randomUUID() + ext;
        cb(null, filename);
    }
});
const upload = multer({ storage: storage });

router.get('/', filmeController.listarFilmes);
router.get('/:id', filmeController.buscarFilmePorId);
router.get('/:id/capa', filmeController.buscarCapaFilmePorPath);
router.post('/', upload.single('file'), filmeController.criarFilme);
router.put('/:id', filmeController.atualizarFilme);
router.delete('/:id', filmeController.removerFilme);

module.exports = router;