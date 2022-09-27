const expressAsyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');
const User = require('../model/User');

const authMiddleware = expressAsyncHandler(async (req, res,  next) => {
    let token;
    if (req?.headers?.authorization?.startsWith('Bearer')){
        token = req?.headers?.authorization?.split(' ')[1];
        console.log("tocken", token)
        try {
            if (token) {
                const decoderUser = jwt.verify(token, process.env.JWT_KEY);
                console.log(decoderUser);
                //find the user who create the incomeRoute
                const user = await User.findById(decoderUser?.id);
                console.log(user);
                //attach the user to req object
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error("Not Authorized token expired")
        }
    }
    else{
        throw new Error("There is no attach authorization to the headers")
    }
})

module.exports = authMiddleware;

