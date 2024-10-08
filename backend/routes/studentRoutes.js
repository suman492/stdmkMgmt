const express = require('express')
const router= express.Router();

const studentController = require('../controllers/studentController.js');


router.post('/student', studentController.createStudentInfo);      // Create a newSTUDENT
router.get('/student', studentController.getstudentInfo);
router.get('/student/:id',studentController.getstudentById);
router.put('/student/:id',studentController.updateStudent);
router.delete('/student/:id',studentController.deleteStudentById);

module.exports = router;