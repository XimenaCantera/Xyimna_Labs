const express = require('express');
const router = express.Router();


const TrabajosController = require('../controllers/trabajos.controllers');

router.get('/Agregar', TrabajosController.get_agregar);
router.post('/Agregar', TrabajosController.post_agregar);
router.get('/', TrabajosController.get_root);

module.exports = router;