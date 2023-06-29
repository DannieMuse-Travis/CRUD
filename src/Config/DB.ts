import mongoose from "mongoose"

const MongoDB_STRING = "mongodb://127.0.0.1:27017/set07BE"

async function dbConfig(){
    try {
        const conn= await mongoose.connect(MongoDB_STRING)
        console.log(`DB connected to ${conn.connection.host}`);
    } catch (error:any) {
       console.log(error); 
    }
}

export default dbConfig