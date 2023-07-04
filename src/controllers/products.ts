// product controller
import {Request, Response} from 'express'
import Product from '../models/Product'
import productServices from '../services/products'


export const createProducts=async (req:Request, res:Response)=>{
    const productInformation=new Product({
        title:req.body.title,
        price:req.body.price
    })
   const product =await productServices.createProductService(
    productInformation
   )

    res.status(200).json(product)
}