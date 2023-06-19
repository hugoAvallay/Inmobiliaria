const express = require('express');
const path = require('path');
const app = express();
const PORT = 4530;

app.use(express.static('public'));

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views/home.html')));

app.get('/Anuncios',(req,res)=>res.sendFile(path.join(__dirname,'views/Anuncios.html')));

app.get('/Nosotros',(req,res)=>res.sendFile(path.join(__dirname,'/views/Nosotros.html')));

app.get('/Blog',(req,res)=>res.sendFile(path.join(__dirname,'/views/Blog.html')));

app.get('/Contacto',(req,res)=>res.sendFile(path.join(__dirname,'views/Contacto.html')))



app.listen(PORT,()=>console.log(`Server running in http://localhost:${PORT}`));
