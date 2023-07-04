// product route
import { createProducts } from "../controllers/products";
import Router from "express";

const router=Router()
 

router.post('/', createProducts)

export default router


