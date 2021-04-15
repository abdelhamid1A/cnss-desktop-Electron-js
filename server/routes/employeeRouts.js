const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')
const auth = require('../middleware/auth')



router.get('/',employeeController.getData)
/**
 * @swagger
 * /employee/:
 *   post:
 *     summary: create an employee.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 type: string
 *                 description: The employee's name.
 *                 example: empl1
 *               phone:
 *                 type: string
 *                 description: The employee's phone.
 *                 example: +212678787878
 *               is_valid:
 *                 type: bollen
 *                 description: The employee status.
 *                 example: false
 *               matricule:
 *                 type: string
 *                 description: The employee's immatriculation number.
 *                 example: 123456789
 *               password:
 *                 type: string
 *                 description: The employee's password.
 *                 example: password123
 *               email:
 *                 type: string
 *                 description: The employee's email.
 *                 example: employee123@gmail.com
 *     responses:
 *       201:
 *         description: A successful response
*/
router.post('/',employeeController.creatEmployee)
router.delete('/:id',employeeController.deleteEmployee)
router.put('/:id',employeeController.updateEmployee)
router.post('/login',employeeController.loginEmployee)
/**
 * @swagger
 * /employee/resetPassword:
 *   post:
 *     summary: reset password .
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 description: password from email.
 *                 example: xzrtf
 *               newPassword:
 *                 type: string
 *                 description: The new password.
 *                 example: 12345
 *               
 *     responses:
 *       200:
 *         description: account validate
*/
router.post('/resetPassword',employeeController.resetPassword)
/**
 * @swagger
 * /employee/info:
 *  get:
 *    summary: Get employee by id using token.
 *    responses:
 *      '200':
 *        description: get info
 */
router.get('/info',auth,employeeController.getInfo)
module.exports = router