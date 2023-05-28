const express = require('express'); 

let router = express.Router(); 

router.get("/", (req, res, next) =>{
    res.json({
        "msg": "This is Get cookies page"
    }) 

})

module.exports = router;