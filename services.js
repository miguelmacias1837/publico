var express = require('express');
var http = require('http')
var bodyParser=require('body-parser');
var Firebase= require('firebase');
var items=[]
var contador=0

var miRuta= new Firebase('https://music97.firebaseio.com/')
var router=express.Router()
router.use(bodyParser())
router.route('/')
.get(function(request,response){
    items=[]
    miRuta.once("value",function(snap){
        var nuevoCliente=snap.val()
        items.push(nuevoCliente)
        console.log(contador++)
        return response.send(items)
        //response.status(200).send(items)
     })
     //setTimeout(function(){
     //    response.json(items)
     //},1000)

})
.post(function(req,res,next){
    miRuta.child(req.body.cedula).set(req.body)
    res.status(200).send('post version 1')
})
.put(function(req,res,next){

    miRuta.child(req.body.cedula).set(req.body)
     res.status(200).send(req.body.codigo)
})
.delete(function(req,res,next){
    miRuta.child(req.body.cedula).remove(function(error){
        if (error)
         {
             return res.status(404).send('error de todas')
         }
     })
    return res.status(200).send('ok')
});

// views is directory for all template files

var app= express()
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname+'/public'))
app.use('/todo',router)


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//app.listen(3000)

//app.use(express.static(__dirname + '/public'));

