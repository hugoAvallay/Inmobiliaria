const express = require('express');
const path = require('path');
const app = express();
const PORT = 4530;

app.get('/',(re,res)=>res.sendFile(path.join(__dirname,'views/index.html')))
app.listen(PORT,()=>console.log(`Server running in http://localhost:${PORT}`));
