import User from "../../models/User.js";
import bcrypt from "bcrypt";

export const CreateUser = async (req, res)=>{
    try {
        const {name, user_name, password} = req.body;

        if(!name || !user_name || !password) {

            return res.status(400).json({success: false, message:`${!name ? 'Name': !user_name ? 'User Name':'Password'} is required.`});
        }

        let user_exists = await User.findOne({username:user_name});
        
        if(user_exists){
            return res.status(403).json({success: false, message:`User name already exists.`});
        }

        const slat = await bcrypt.genSalt();
        const hashed_password = await bcrypt.hash(password, slat);

        const newUser = new User({
            name:name,
            username: user_name,
            password:hashed_password
        });
            
        await newUser.save();

        return res.status(201).json({success: true, message: `User created successfully.`});

    } catch (error) {
        console.log(`CreateUser error `, error);
        return res.status(500).json({success:false, message:`something went wrong`});
    }
};