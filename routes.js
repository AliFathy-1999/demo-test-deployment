const router = require('express').Router();
const testController = require('./controller');
router.get('/', testController.testFunction);
module.exports = router;
