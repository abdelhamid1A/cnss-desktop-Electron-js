const app = require('./server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)
// const db = require('../config/config.json')
// const db = require('./models')

// // beforeAll(async () => {
// //   await   db.sequelize.sync()
// // })

// // phone number must be valid
// it('phone number must be valid', () => {
//   expect('+212644444444').toMatch(
//     /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/
//   )
// })

// // registernumber must contain 9 charh
// it('register number must be greater or equal to 9 degit', () => {
//   expect('012345678').toMatch(/^[0-9]{9}$/)
// })



// it('must return a valid token', async (done) => {
//   const res = await request.post('employee/login').send({
//     email: 'empl1@mail.com',
//     password : '12345'
//   })

//   expect(res.status).toBe(200)
//   done()
// })