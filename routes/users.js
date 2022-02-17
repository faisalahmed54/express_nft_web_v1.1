var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let data = {};
    data.page_assets = {
        "css": false,
        "js": false,
        "js_module": false
    };
    data.page_assets.js = false;
    data.page_assets.js_module = true;
    res.send('respond with a resource');
});

module.exports = router;