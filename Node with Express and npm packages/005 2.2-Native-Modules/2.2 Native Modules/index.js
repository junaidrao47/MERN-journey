console.log("HELO");
const fs = require("fs");
// fs.writeFile("message.txt","HELLO JUNAID  aj", (err)=>{
//     if (err) throw err;
//     console.log("File is saved");
// });


fs.readFile('message.txt','utf-8', (err,data)=>{
    if (err) throw err;
    console.log(data);
});