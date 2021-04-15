const db = require('../models')
const bcrypt = require('bcrypt')
const { sendMail, randomPassword, randomMatricule } = require('./methodsController')
const jwt = require('jsonwebtoken')
module.exports = {
    getData(req, res) {
        db.Employee.findAll()
            .then((result) => {
                res.status(200).send(result)
            }).catch((err) => {
                console.log(err);
            });
    },
    creatEmployee(req, res) {
        console.log(req.body);
        const { user_name, email, password, AgentId, phone } = req.body
        const tempPassword = randomPassword(6)
        const matricule = randomMatricule(9)
        bcrypt.hash(tempPassword, 10, (err, hash) => {
            if (hash) {
                db.Employee.create({
                    user_name,
                    email,
                    AgentId,
                    password: hash,
                    matricule,
                    phone
                })
                    .then(result => {
                        sendMail(tempPassword, email)
                        res.status(200).send(result)
                    })
                    .catch(err => {
                        console.log(err.message);
                    })
            }
        })
    },
    deleteEmployee(req, res) {
        db.Employee.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => (res.status(200).send('deleted')))
            .catch(err => console.log(err))
    },
    updateEmployee(req, res) {
        const { user_name } = req.body
        db.Employee.update({
            user_name: user_name
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                res.status(200).send(result)
            })
            .catch(err => console.log(err))
    },
    async loginEmployee(req, res) {
        const { email, password } = req.body
        const employee = await db.Employee.findOne({ where: { email } })
        if (employee) {

            bcrypt.compare(password, employee.password, (err, result) => {
                if (result) {
                    if (employee.is_valid) {
                        const token = jwt.sign({ _id: employee.id, email: employee.email }, process.env.JWT_KEY)
                        res.status(200).send(token)
                    } else {
                        const token = jwt.sign({ _id: employee.id, email: employee.email }, process.env.JWT_KEY)
                        res.status(200).json({token,message:'redirect to reset password'})
                    }
                } else {
                    
                    res.status(401).send('email or password incorrect')
                }
            })

        } else {
            res.status(404).send('email not found')
        }
    },
    async resetPassword(req, res) {
        const { email, password, newPassword } = req.body
        const employee = await db.Employee.findOne({ where: { email } })
        if (employee) {

            bcrypt.compare(password, employee.password, (err, result) => {
                if (result) {
                    bcrypt.hash(newPassword, 10, async (err, hash) => {
                        if (hash) {
                            employee.password = hash
                            employee.is_valid = true
                            await employee.save()
                            res.status(202).send('validate')
                        }
                    })
                } else {
                    res.status(401).send('email or password incorrect')
                }
            })
        } else {
            res.status(404).send('email not found')
        }
    },
    async getInfo(req,res){
        const token = req.header('auth-token')
        const tokenDecode = jwt.verify(token,process.env.JWT_KEY)
        const employee = await db.Employee.findOne({where:
            {
            id:tokenDecode._id
            },
            attributes:  ['id','user_name', 'phone','matricule']
        })
        if(employee){
            res.status(200).send(employee)
        }else{
            res.status(404).send('not found')
        }
    }
}