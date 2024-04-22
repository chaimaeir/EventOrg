const asyncHandler = require ('express-async-handler');
const admin = require('../models/admin');



const authorize = (roles) => {
    return (req, res, next) => {
      if (!req.user || !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Unauthorized' });
      }
      next();
    };
  };
  
  module.exports = { authorize };
  

