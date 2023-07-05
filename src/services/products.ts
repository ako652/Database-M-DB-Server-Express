import { ProductDocument } from './../models/Product';
import Product from './../models/Product';
// product services



export const createProductService =async(
    product:ProductDocument
): Promise<ProductDocument| undefined> =>{
   try {
     return product.save();
   } catch (error) {
    console.log(error)
    
   }
};

export const getAllProducts =async():Promise<ProductDocument[]|undefined>=>{
    try {
        return Product.find()
    } catch (error) {
        console.log(error)
        
    }

}

export const getProductById =async(productId:string):Promise<ProductDocument|undefined|null>=>{
try {
    const foundProduct=await Product.findById(productId)
    if(!foundProduct){
     console.log('cant find product')
    }
    return foundProduct
} catch (error) {
    console.log(error)
    
}
}

