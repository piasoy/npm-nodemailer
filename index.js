var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'piasoy4@gmail.com',
           pass: 'ntiynbqbukrcsije'
       }
   });


const mailOptions = {
    from: 'piasoy4@gmail.com', // sender address
    to: 'piasoy4@gmail.com', // list of receivers
    subject: 'First Email using nodemailer', // Subject line
    html: '<p>Yay!  It worked</p>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });