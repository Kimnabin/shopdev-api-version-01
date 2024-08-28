const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/api/users', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok',
        metadata: [
            {
                name: 'congduc',
                age: 24
            },
            {
                name: 'yenquynh',
                age: 25
            },
            {
                name: 'conghuy',
                age: 18
            }
        ]
    })
})

module.exports = router;