var express = require('express');
var router = express.Router()

router.get('/', (req, res) => {
    var date = new Date();
    var day = date.getDate()
    var month = date.toLocaleString('default', { month: 'long' }).toUpperCase();
    res.render('index', {
        month: month,
        day: day
    })
})

router.get('/help/contact', (req, res) => {
    var date = new Date();
    var day = date.getDate()
    var month = date.toLocaleString('default', { month: 'long' }).toUpperCase();
    res.render('contact', {
        month: month,
        day: day
    })
})

module.exports = router;