import apiError from "../../../errors/apiError";
import { IBook } from "./book.interface"
import { BookModel } from "./book.model";

const createBook = async (book:IBook): Promise<IBook | null> => {
    const result = await BookModel.create(book);

    if (!result) {
      throw new apiError(400, 'Failed to create Book!');
    }

    return result

  }

  
const getSingleBook = async (id:string): Promise<IBook | null> => {

    const result = await BookModel.findById({_id:id});

    if (!result) {
      throw new apiError(400, 'Failed to create Book!');
    }

    return result
  
  }

const updateBook = async (email:string, data:IBook): Promise<IBook | null> => {

        const isExist= await BookModel.findOne({email:email});

        if(!isExist){
            throw new apiError(400, 'Failed to update Book!');

        }

        const result = await BookModel.findOneAndUpdate({email:email}, {data}, {new:true});

        return result
  
  }
const deleteBook = async (email:string): Promise<IBook | null> => {

        const isExist= await BookModel.findOne({email:email});

        if(!isExist){
            throw new apiError(400, 'Failed to Delete Book!');

        }

        const result = await BookModel.findOneAndDelete({email:email});

        return result
  
  }


const getAllBook = async (): Promise<IBook[] | null> => {
    const result = await BookModel.find({});

    if (!result) {
      throw new apiError(400, 'Failed to create Book!');
    }

    return result
  
  }

export const bookServices={
    createBook,
    getAllBook,
    getSingleBook,
    deleteBook,
    updateBook
}