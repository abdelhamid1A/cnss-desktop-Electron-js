const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
module.exports = {
    getData(req,res){
        db.Agent.findAll()
        .then((result) => {
            res.status(200).send(result)
        }).catch((err) => {
            console.log(err);
        });
    },
    creatAgent(req,res){
        console.log(req.body);
        const {user_name,password} = req.body
        bcrypt.hash(password,10,(err,hash)=>{
            if(hash){
                db.Agent.create({
                    user_name,
                    password:hash
                })
                .then(result=>{
                    res.status(200).send(result)
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        })
    },
    deleteAgent(req,res){
        db.Agent.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(()=>(res.status(200).send('deleted')))
        .catch(err=>console.log(err))
    },
    updateAgent(req,res){
        const {user_name} = req.body
        db.Agent.update({
            user_name:user_name
        },{
            where:{
                id:req.params.id
            }
        })
        .then(result=>{
            res.status(200).send(result)
        })
        .catch(err=>console.log(err))
    },
    async loginAgent(req,res){
        const { user_name, password } = req.body
        const agent = await db.Agent.findOne({ where: { user_name } })
        if (agent) {

            bcrypt.compare(password, agent.password, (err, result) => {
                if (result) {
                        const token = jwt.sign({ _id: agent.id }, process.env.JWT_KEY)
                        res.status(200).send(token)
                } else {
                    res.status(401).send('user name or password incorrect')
                }
            })

        } else {
            res.status(404).send('user name not found')
        }
    }
}