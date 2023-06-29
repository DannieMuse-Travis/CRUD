import { Request,Response } from "express";
import UserModel from "../Model/UserModel";
import { IUser } from "../utils/interface";

export const createStudent = async (req:Request<{},{},IUser>,res:Response)=>{
try {
    const {name,age,gender,email,hobbies}=req.body
    const newStudent = await UserModel.create({
        name,age,gender,email,hobbies
    })

    return res.status(201).json({
        message:"new student added",
        data:newStudent,
    })
} catch (error) {
  return res.status(500).json(error)
}
}

export const getStudent = async(req:Request,res:Response)=>{
    try {
      const Student = await UserModel.find()  
      return  res.status(200).json(Student)
    } catch (error) {
       return res.status(500).json(error)
    }
}

export const getOne = async(req:Request,res:Response)=>{
    try {
        const student = await UserModel.findById(req.params?.studentID)
        if (!student) {
           return res.status(400).json({
            message:"user not found",
           })
        } else {
           return res.status(200).json(student) 
        }
    } catch (error) {
       return res.status(500).json(error) 
    }
}

export const UpdateStudent = async(req:Request,res:Response)=>{
    try {
        const {name,age}=req.body
        const student = await UserModel.findByIdAndUpdate(req.params.studentID,{
            name,
            age,
        },
        {new:true}
        )
        if (!student) {
            return res.status(400).json({
                message:"user not found",
            })
           } else {
            return res.status(200).json(student)
           }
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const deleteStudent = async(req:Request,res:Response)=>{
    try {
        const student = await UserModel.findByIdAndDelete(req.params.studentID)
        if (!student) {
            return res.status(400).json({
                message:"user not found",
            })
           } else {
            return res.status(200).json(student)
           }
    } catch (error) {
        return res.status(500).json(error)
    }
}