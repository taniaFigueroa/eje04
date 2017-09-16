var fs = require("fs");
fs.appendFile("mynewfile","Hola Muendo",function(err){
    if(err){
        console.log("Error:"+err);
        throw err;
    }
    console.log("Saved!");
});

//modulo de nodejs//
