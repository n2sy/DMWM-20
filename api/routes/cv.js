const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/cv");
const isAuthorized = require("../middleware/isAuthorized");



router.get('/persons', ctrl.getAllPersons);
router.post('/persons', isAuthorized, ctrl.createPerson);
router.get('/persons/:myid', ctrl.getPerson);
router.put('/persons/:id', isAuthorized, ctrl.updatePerson);
router.delete('/persons/:id', isAuthorized, ctrl.deletePerson);

module.exports = router;