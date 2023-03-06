const mongoose = require('mongoose');

const filmeSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    imagem: {
        type: Object,
        required: true,
    },
    dataLancamento: {
        type: Date,
        required: true,
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}
);

const Filme = mongoose.model('Filme', filmeSchema);

module.exports = Filme;