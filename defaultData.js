import Product from "./modules/product.js";
import User from "./modules/user.js";
import { products } from "./constants/Data.js";


const defaultData = async ()=>{
    try{
        // to reset all users
        // await User.deleteMany();
        // console.log("all users reset");

        //to reset all products
        // await Product.deleteMany();
        // console.log("All products deleted");

        //to insert all data
        await Product.insertMany(products);
        console.log("Data inserted Successfully");
    }
    catch(err){
        console.log("Error while inserting default Data "+err.message);
    }
}

export {defaultData};