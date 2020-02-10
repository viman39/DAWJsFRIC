const express = require('express')
const router = express.Router() 

const fetch = require('node-fetch')

router.get('/', (req, res) => {
    res.render('index.html')
});

router.get('/tree', (req, res) => { // line 
    let body={
        alo:'sal'
    };

    // fetch('https://us-central1-fractalsline.cloudfunctions.net/line', {method: "POST",
    // headers:{'Content-Type': 'application/json'},body:JSON.stringify(body)}).then(res=>{
    //     return res.json()
    // })
    // .then(json=>{
        res.render('tree.html');
    // })
})

router.get('/line', (req, res) => { // line 
    let body={
        alo:'sal'
    };

    fetch('https://us-central1-fractalsline.cloudfunctions.net/line', {method: "POST",
    headers:{'Content-Type': 'application/json'},body:JSON.stringify(body)})
    .then(res=>{
        return res.json()
    })
    .then(json=>{
        res.render('line.html');
    })
})

module.exports = router
