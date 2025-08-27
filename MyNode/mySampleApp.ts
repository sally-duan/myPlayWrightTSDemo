import express, { Request, Response } from "express";

const app = express();
app.get("/", (req:Request, res:Response)=>{
    res.send("hello Sally");
} );

const PORT= 3000;
app.listen(PORT, ()=>{
    console.log("server at port 3000");
})