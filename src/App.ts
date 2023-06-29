import express,{Application} from "express"

import cors from "cors"

const AppConfig = (app:Application)=>{
    app
    // middlewares
    .use(express.json())
    .use(cors)
}

export default AppConfig