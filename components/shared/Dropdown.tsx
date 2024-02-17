import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { ICategory } from "@/lib/database/modals/category.model";

import { startTransition, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { createCategory, getAllCategories } from "@/lib/actions/category.actions";

type DropDownProps = {
  value?: string;
  onchangeHandler?: () => void;
};
const Dropdown = ({ value, onchangeHandler }: DropDownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [newcategory, setNewCategory] = useState('')

  const handleAddCategory = ()=>{
    createCategory({
      categoryName:newcategory.trim()
    }).then((category)=>{
      setCategories((prevState)=>[...prevState,category])
    })
  }

  useEffect(() => {
    const getCategories = async ()=>{
      const catagoryList = await getAllCategories();

      catagoryList && setCategories(catagoryList as ICategory[]);
    }
    getCategories();
  }, [])
  
  return (
    <>
      <Select onValueChange={onchangeHandler} defaultValue={value}>
        <SelectTrigger className="select-field">
          <SelectValue placeholder="category" />
        </SelectTrigger>
        <SelectContent>
          {categories.length > 0 &&
            categories.map((category) => (
              <SelectItem
                key={category._id}
                value={category._id}
                className="select-item p-regular-14"
              >
                {category.name}
              </SelectItem>
            ))}
          <AlertDialog>
            <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8
            text-primary-500 hover:text-primary-50 focus:text-primary-500
            ">
              Open
            </AlertDialogTrigger>
            <AlertDialogContent className='bg-white'>
              <AlertDialogHeader>
                <AlertDialogTitle>Add Category</AlertDialogTitle>
                <AlertDialogDescription>
                  <Input  type="text" placeholder="category name" className="
                  input-filed mt-3" onChange={(e)=>setNewCategory(e.target.value)}/>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={()=>startTransition(handleAddCategory)}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </SelectContent>
      </Select>
    </>
  );
};

export default Dropdown;
