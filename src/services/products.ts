import { ProductDocument } from './../models/Product';
// product services



const createProductService =async(
    product:ProductDocument
): Promise<ProductDocument> =>{
    return product.save()
};

export default {createProductService}
