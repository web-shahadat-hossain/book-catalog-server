import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { bookServices } from './book.services';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const { ...book } = req.body;
  const result = await bookServices.createBook(book);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User create successfully!',
    data: result,
  });
});
const getSingleBook= catchAsync(async (req: Request, res: Response) => {
const {id}=req.params
  const result = await bookServices.getSingleBook(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully!',
    data: result,
  });
});


const updateBook= catchAsync(async (req: Request, res: Response) => {
const {email}=req.params
const {...data}= req.body
  const result = await bookServices.updateBook(email, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update Successfully!',
    data: result,
  });
});

const deleteBook= catchAsync(async (req: Request, res: Response) => {
const {email}=req.params
  const result = await bookServices.deleteBook(email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete Successfully!',
    data: result,
  });
});


const getAllBook = catchAsync(async (req: Request, res: Response) => {

  const result = await bookServices.getAllBook();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully!',
    data: result,
  });
});

export const bookController={
    createBook,
    getAllBook,
    getSingleBook,
    deleteBook,
    updateBook
}