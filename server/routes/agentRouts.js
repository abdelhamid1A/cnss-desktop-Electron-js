const express = require('express')
const router = express.Router()
const agentController = require('../controllers/agentController')



router.get('/',agentController.getData)
/**
 * @swagger
 * /:
 *   post:
 *     summary: create an Agent.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 type: string
 *                 description: The Agent name.
 *                 example: agent1
 *               password:
 *                 type: string
 *                 description: The agent password.
 *                 example: 12345
 *               
 *     responses:
 *       201:
 *         description: A successful response
*/
router.post('/',agentController.creatAgent)
router.delete('/:id',agentController.deleteAgent)
router.put('/:id',agentController.updateAgent)
router.post('/login',agentController.loginAgent)
module.exports = router