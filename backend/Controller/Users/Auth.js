import User from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {

    try {

        const { user_name, password } = req.body;

        if(!user_name || !password){ 
            return res.status(200).json({success:false, message:`${!user_name ? 'User name':'password'} is required.`});
        }

        const user = await User.findOne({ username: user_name });

        if (!user) return res.status(400).json({success: false, message: `User not found.`});

        const is_match = await bcrypt.compare(password, user.password);
        if (!is_match) return res.status(400).json({ success: false, message:"Invalid Credentials" });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET,
            {
              expiresIn: process.env.TOKEN_EXPIRES_IN,
            }
        );
        
        const userObj = user.toObject();
        delete userObj.password;

        return res.status(200).json({success:true, message:`Login Successfully`, token, user:userObj });
        
    } catch (error) {
        console.log(`Login error `, error);
        return res.status(500).json({success:false, message:`something went wrong`});
    }
}
