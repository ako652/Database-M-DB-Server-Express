
import { createProductService , getAllProducts, getProductById} from './../services/products';
// product controller
import {Request, Response} from 'express'
import Product from '../models/Product'



export const createProducts=async (req:Request, res:Response)=>{
    const productInformation=new Product({
        title:req.body.title,
        price:req.body.price
    })
   try {
    const product = await createProductService(productInformation);

    res.status(200).json(product);
    
   } catch (error) {
    res.status(500).json('error')
    
   }
}

export const getProductList=async(req:Request, res:Response)=>{
    try {
        const productList=await getAllProducts()
        res.status(200).json(productList)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const productById=async(req:Request, res:Response)=>{

 try {
    const productId=req.params.id
    const product =await getProductById(productId)
    res.status(200).json(product)

 } catch (error) {
    res.status(500).json({error:error})
 }
}