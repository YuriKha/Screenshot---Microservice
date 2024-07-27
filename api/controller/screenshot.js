const puppeteer = require('puppeteer');

//----------------- export -------------------------
module.exports={   
    // POST  http://localhost:3005/screenshot/takescreenshot
    // {
    //     "website":"https://random-website-name.com"
    // }
    TakeScreenshot:async (req, res) => {
        const {website} = req.body;
        console.log("the req.body that you just received: ");
        console.table(req.body);
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
    
            // Set a larger viewport width and height
            await page.setViewport({ width: 1920, height: 1080 });
     
            // Navigate to the URL you want to capture
            await page.goto(website);

            // Capture a screenshot of the entire page
            const screenshotBuffer = await page.screenshot({ fullPage: true });
    
            await browser.close();
    
            // Send the full-page screenshot as a response
            res.setHeader('Content-Type', 'image/png');
            return res.send(screenshotBuffer).status(200);
        } catch (error) {
            console.error('Error capturing screenshot:', error);
            return res.status(500).send('Error capturing screenshot');
        }
    }
}