const express = require('express');
const router = express.Router();
const filmeRoutes = require('./filmeRoutes');

router.get('/', (req, res) => {
    return res.status(200).json({ status: 'heartbeat' })
})

router.use('/filmes', filmeRoutes);

module.exports = router;