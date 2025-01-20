import nodeMailer from 'nodemailer'
function sendMail(email,password,otp)
{
  var transpoter = nodeMailer.createTransport({
   service:'gmail',
   auth:{
      user:'zyadahoshiyar@gmail.com',
      pass:'cbwsnblwhipvjkrx'
   }
  });

  var mailOption = {
    from : "zyadahoshiyar@gmail.com",
    to: email,
    subject:'Send OTP From Node Batch 5:00 PM',
    html: '<h1>Welcome to Node Mailer</h1><p>This is verification mail by My Online E-Shop</p><h2>Username='+email+'<br> Password='+password+'<br> OTP ='+otp+'</h2>'
  }

  transpoter.sendMail(mailOption,function(err,result){
    if(!err)
    {
       console.log('Succesfully send OTP on Your Mail: ' + result.response);
    }
    else
    {
        console.log('OTP Not Send : ' +err);
    }
  })
}
export default sendMail;