import express from "express";
import {signUpController, signInController, updateUserAddress} from "../controllers/userController.js";
import { getAllProducts, getProductById } from "../controllers/productController.js";
import {storeToCartController,getAllcartData} from "../controllers/cartController.js";

const router = express.Router();

router.post("/signin", signInController);
router.post("/signup", signUpController);
router.get("/product", getAllProducts);
router.get('/product/:id', getProductById)
router.post("/cartadd", storeToCartController);
router.post("/cart", getAllcartData);
router.put("/user/:username/address", updateUserAddress);

export default router;