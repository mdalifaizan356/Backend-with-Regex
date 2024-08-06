const rootcontroller = (req,res)=>{
    res.status(200).send({
        message:"WelCome to the root controller",
    });
}

module.exports = rootcontroller;