import Product from "./modules/product.js";
import User from "./modules/user.js";
import { products, users } from "./constants/Data.js";


const resetDefaultData = async ()=>{
    try{
        // to reset all users
        console.log('Deleting old users to avoid duplication....');
        await User.deleteMany();

        console.log('Inserting Users to database....');
        await User.insertMany(users);
        console.log('Users inserted successfully');

        //to reset all products
        // console.log('deleting all the old products to avoid duplication....');
        // await Product.deleteMany();

        //to insert all data
        // console.log('Inserting the products to database.....');
        // await Product.insertMany(products);
        // console.log("All products inserted Successfully");
    }
    catch(err){
        console.log("Error while inserting default Data "+err.message);
    }
}

export {resetDefaultData};