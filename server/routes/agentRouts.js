const express = require('express')
const router = express.Router()
const agentController = require('../controllers/agentController')



router.get('/',agentController.getData)
router.post('/',agentController.creatAgent)
router.delete('/:id',agentController.deleteAgent)
router.put('/:id',agentController.updateAgent)
module.exports = router