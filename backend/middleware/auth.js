const jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
    const token = req.header("x-auth-token");
  
    //Check if not token
    if (!token) {
      return res.status(401).json({ msg: "Authorization failed, No token" });
    }
  
    // Verify token
    try {
      jwt.verify(token, process.env.JSON_SECRET_TOKEN, (error, decoded) => {
        if (error) {
          return res.status(401).json({ msg: "Token is not valid" });
        } else {
          req.user = decoded.user;
          next();
        }
      });
    } catch (err) {
      console.error("something wrong with auth middleware");
      res.status(500).json({ msg: "Server Error" });
    }
  };