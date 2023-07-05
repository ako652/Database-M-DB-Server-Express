
// product route
import { createProducts ,getProductList, productById} from "../controllers/products";
import Router from "express";

const router=Router()
 

router.post('/', createProducts)
router.get('/', getProductList)
router.get('/:id', productById)


export default router


