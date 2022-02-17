var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let data = {};
    data.page_id = "connect_wallet";
    data.title = "Connect Wallet";
    data.page_assets = {
        "css": false,
        "js": false,
        "js_module": false
    };
    data.page_assets.js = false;
    data.page_assets.js_module = true;
    res.render('index', data);
});

module.exports = router;