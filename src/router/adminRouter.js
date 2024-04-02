const router = require('express').Router();
const controller = require('../controller/controller');

router.post('/create-user',controller.createUsers);

module.exports = router;