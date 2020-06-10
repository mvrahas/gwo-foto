const express = require('express')
const path = require('path');
const port = process.env.PORT || 3000
const app = express()

express.static('http://localhost:3000/')
app.use(express.static('public'))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname+'/public/welcome.html'));
})

app.get('/map',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index$.html'));
});

app.get('/goats',function(req,res){
    res.set('Scene', 'goats');
    res.sendFile(path.join(__dirname+'/public/scene.html'));
});

app.get('/clinic',function(req,res) {
    res.set('Scene', 'clinic');
    res.sendFile(path.join(__dirname+'/public/scene.html'));
});

app.get('/mobileclinic',function(req,res) {
    res.set('Scene', 'mobileclinic');
    res.sendFile(path.join(__dirname+'/public/scene.html'));
});

app.get('/houses',function(req,res) {
    res.set('Scene', 'houses');
    res.sendFile(path.join(__dirname+'/public/scene.html'));
});

app.listen(port, () => console.log('App is up on ' + port))