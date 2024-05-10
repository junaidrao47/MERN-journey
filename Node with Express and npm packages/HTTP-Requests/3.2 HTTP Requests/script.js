import express from "express";

const app = express();
const port = 3001;
app.get("/", (req,res)=>{
    res.send("<h1>HELOO WORLD JUNAID</h1>");
})

app.get("/about", (req,res)=>{
    res.send("<h1>About ME</h1>");
})

app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`);
});