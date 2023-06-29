import express,{Application} from "express"
import AppConfig from "./App";
import dbConfig from "./Config/DB";

const  app:Application=express();

const server = async()=>{
    try {
         AppConfig(app);
         dbConfig()
        //server listening
        app.listen(4500,()=>{  
            console.log("listen on port 4500");
        })
    } catch (error) {
        console.log(error);
    }
}

server()
// server intialization