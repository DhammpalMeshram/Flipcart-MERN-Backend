import User from "../modules/user.js"; 

//controller to check user sign in data 
export const signUpController = async (req, res)=>{
    try{
        const existEmail = await User.findOne({email: req.body.email});
        const existNumber = await User.findOne({mobileNumber: req.body.mobileNumber});
    
        if(existEmail) 
            return res.status(401).json({message: "account with email already exist"})
        
        if(existNumber) 
            return res.status(401).json({message: "account with mobile number already exist"})

        const user = req.body;
        const newUser = new User(user);
        await newUser.save();

        res.status(201).json({user, message:"Sign up Successfull"});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

// controller to check user signin data
export const signInController = async (req, res)=>{
    try{
        const existUser = await User.findOne({$or: [{email:req.body.username}, {mobileNumber: req.body.username}]});
        
        if(!existUser){
            res.status(401).json({message:"You don't have an account. Plese sign in first"});
        }
        else if(existUser.password === req.body.password){
            res.status(200).json({
                username:existUser.username, 
                id: existUser.email,
                address: existUser.address,
                cartItems: existUser.cartItems,
                message:"log in successful"});
            }            
        else res.status(401).json({message:"Incorrect Password"});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}


export const updateUserAddress = async (req, res) => {
    try {
        const { username } = req.params;
        const { address } = req.body;

        const existUser = await User.findOne({username});
        if (!existUser) {
            return res.status(404).json({ message: "User not found" });
        }

        existUser.address = address;
        await existUser.save();

        res.status(200).json({ message: "Address updated successfully" });
    } catch (error) {
        console.error("Error updating address:", error);
        res.status(500).json({ message: "Server Error" });
    }
};