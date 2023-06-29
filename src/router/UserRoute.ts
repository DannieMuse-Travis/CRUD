import express,{Router,Request,Response} from "express"
import { UpdateStudent, createStudent, deleteStudent, getOne, getStudent } from "../Controller/UserController"


const  router = Router()

router.route("/home").get((req:Request,res:Response)=>{
    return res.status(200).json({
        message:"welcome home 🚀🚀🚀✈"
    })
})
router.post('/create',createStudent)
router.get("/getAll", getStudent)
router.get("/getOne/studentID", getOne)
router.patch("/updateProfile/:studentID",UpdateStudent)
router.delete("/delete/:studentID",deleteStudent)


export default router