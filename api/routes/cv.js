const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/cv")



router.get('/persons', ctrl.getAllPersons);
router.post('/persons', ctrl.createPerson);

module.exports = router;