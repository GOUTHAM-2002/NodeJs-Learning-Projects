const fs = require("fs");

fs.writeFile('generated.js',"console.log('this file was generated')",(err)=>{
    if (err) throw err;
    console.log("Your file has been saved succesfully");
})