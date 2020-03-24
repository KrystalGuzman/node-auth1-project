// const bcrypt = require("bcryptjs");

// module.exports = (req, res, next) => {

//     if (!req.session || !req.session.isLoggedIn)
//         { res.status(401).json({message: "You shall not pass!"})}
//     else
//         { next(); }
// }

const bcrypt = require("bcryptjs");


module.exports = (req, res, next) => {
    if(req.session && req.session.isLoggedIn){
        next();
    }else{
        res.status(401).json({you: "shall not pass!"})
    }
}