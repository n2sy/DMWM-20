const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/cv")



router.get('/persons', ctrl.getAllPersons);
router.post('/persons', ctrl.createPerson);
router.get('/persons/:myid', ctrl.getPerson);
router.put('/persons/:id', ctrl.updatePerson);
router.delete('/persons/:id', ctrl.deletePerson);

module.exports = router;