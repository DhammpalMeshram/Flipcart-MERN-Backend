import User from "../modules/user.js";
import Product from "../modules/product.js";


export const storeToCartController = async (req, res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        let {cartItems} = user;
        cartItems.push(req.body.id);
        
        let newCartArray = Array.from(new Set(cartItems));

        await User.updateOne({email:req.body.email},{cartItems:newCartArray})
        res.status(201).json({cartItems:newCartArray});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

export const getAllcartData = async(req, res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        let {cartItems} = user;
        if(cartItems) res.status(201).json({cartItems:newCartArray});
        else res.status(201).json({cartItems:[]});
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}