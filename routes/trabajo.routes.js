const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth')

const TrabajosController = require('../controllers/trabajos.controllers');

router.get('/Agregar', isAuth, TrabajosController.get_agregar);
router.post('/Agregar', isAuth, TrabajosController.post_agregar);
router.get('/:trabajador_id', isAuth, TrabajosController.get_root);
router.get('/', isAuth, TrabajosController.get_root);

module.exports = router;