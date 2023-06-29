import { Document,model,Schema } from "mongoose";
import { IUser } from "../utils/interface";


const userSchema:Schema<IUser> = new Schema({
    name:{type:String, required:[true,'Name is required']},
    age:{type:Number, required:true},
    email:{type:String,  required:[true,'email is needed'], unique:true},
    gender:{type:String,required:true},
    hobbies:{type:String},
},
{
    timestamps:true,
}
)

const UserModel = model<IUser>("User",userSchema);

export  default UserModel