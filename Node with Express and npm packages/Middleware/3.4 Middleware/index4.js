import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
})
app.post("/submit",(req,res)=>{
  res.send(`Your BAND NAME IS <h1>${req.body["street"]}${req.body["pet"]}</h1>`);

  // Bandnamegenrator
  console.log(res.body);
})


function Bandnamegenrator(req,res){
  console.log(res.body);
  res.send(`Your BAND NAME IS <h1>${res.body["street"]}${res.body["pet"]}</h1>`);
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
