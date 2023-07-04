// product model

import mongoose, {Document} from "mongoose";


export type ProductDocument= Document & {
    title:string,
    price:number,
    image:string
}

const ProductSchema= new mongoose.Schema({
    title:{
    type:String,
    required:true,
    },
    price:{
        type:Number,
    },
    image:{
        type:String,
    }
});


export default mongoose.model<ProductDocument>('Product', ProductSchema)