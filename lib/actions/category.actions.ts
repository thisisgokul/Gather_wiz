"use server"

import { CreateCategoryParams } from "@/types"
import { handleError } from "../utils"
import { connectDatabase } from "../database"
import Category from "../database/modals/category.model"

export const createCategory = async ({categoryName}:CreateCategoryParams)=> {

    try {
        await connectDatabase();

        const newCategory = await Category.create({name:categoryName});
        return JSON.parse(JSON.stringify(newCategory));
    } catch (error) {
        handleError(error);
    }
    
}
export const getAllCategories = async ()=> {

    try {
        await connectDatabase();

        const Categories = await Category.find();
        return JSON.parse(JSON.stringify(Categories));
    } catch (error) {
        handleError(error);
    }
    
}