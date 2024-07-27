const router=require('express').Router();

const {
    TakeScreenshot,
}=require('../controller/screenshot');

//------- endpoint for taking a screenshot -------
router.post('/takescreenshot',TakeScreenshot); // ---> POST --->  http://localhost:3005/screenshot/takescreenshot

//----- export ------
module.exports=router;