var express = require('express');
var router = express.Router()

router.get('/', (req, res) => {
    var date = new Date();
    var day = date.getDate()
    var month = date.toLocaleString('default', { month: 'long' }).toUpperCase();
    res.status(404).render('error', {
        month: month,
        day: day
    })
})

module.exports = router;