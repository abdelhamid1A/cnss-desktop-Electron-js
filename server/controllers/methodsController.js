const nodemailer = require('nodemailer')

async function sendMail(password,email) {
  var output = `<h2>congratulation</h2>
  
  <div>congratulation  your account is created reset your password for validate</br>
  your temporary password : ${password} </br> 
  
  </div>
  `
  
    // const sendTo = email 
  const sendTo = "hamoda.abdo@outlook.fr";
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'CNSS <noreplay@CNSS.com>',
      to: sendTo,
      subject: "verified ✔",
      text: "verified account ",
      html: output,
    });
  } catch (error) {
    console.log(error);
  }
}

function randomPassword(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function randomMatricule(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

// console.log(randomPassword(5));


module.exports = { sendMail,randomPassword,randomMatricule }