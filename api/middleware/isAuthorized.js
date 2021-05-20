const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');

    if (!authHeader) {
        const error = new Error("Not Logged");
        error.statusCode = 401;
        throw error;
    }
    const token = authHeader.split(' ')[1];
    let decodedToken;

    try {
        decodeToken = jwt.verify(token, 'secretdmwm20code');
    }
    catch (err) {
        throw err;
    }



    if (!decodeToken) {
        const error = new Error("Token expired");
        error.statusCode = 401;
        throw error;
    }

    req.userId = decodeToken.userId; //inutile dans notre projet

    next();

}