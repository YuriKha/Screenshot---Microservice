const Screenshot=require('./screenshot');

exports.routesInit = (app) =>{
    
    app.use('/screenshot',Screenshot);

    // default endpoint
    app.all('*',(req,res)=>{ 
    console.log("wrong endpoint");
    res.status(400).json({Msg:"wrong endpoint"});
    });

}