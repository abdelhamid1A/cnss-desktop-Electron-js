const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')
const auth = require('../middleware/auth')



router.get('/',employeeController.getData)
router.post('/',employeeController.creatEmployee)
router.delete('/:id',employeeController.deleteEmployee)
router.put('/:id',employeeController.updateEmployee)
router.post('/login',employeeController.loginEmployee)
router.post('/resetPassword',employeeController.resetPassword)
router.get('/info',auth,employeeController.getInfo)
module.exports = router