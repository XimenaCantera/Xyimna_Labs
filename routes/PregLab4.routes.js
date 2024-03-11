const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('PreLab4');
});

module.exports = router;