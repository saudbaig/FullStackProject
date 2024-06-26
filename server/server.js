const express = require('express');
const route = require('./routes/routes');

const app = express();
const PORT = 4000;

app.use("/",route);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
