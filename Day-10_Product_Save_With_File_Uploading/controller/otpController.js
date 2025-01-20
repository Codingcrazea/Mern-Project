export var check_otp = async (req,res,next)=>{
     
    //Get Data From Request Object
    var userDetails = req.body;
    console.log("User OTP Deatils is : "+userDetails.user_otp);

    //Data Get from Session 
    const userSessionResponse = req.session.userData;
    console.log("Session OTP is : "+userSessionResponse.otp);

    if(userDetails.user_otp == userSessionResponse.otp)
    {
        res.status(200).json({"status":true,"message":"Otp Verifiy"})
    }
    else
    {
        res.status(401).json({"status":false,"message":"Otp Not Match"})
    }  

} 