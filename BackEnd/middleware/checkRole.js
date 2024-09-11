export const checkRole = (roles) => {
    return (req, res, next) => {
      const { role } = req.user.role;
  
      if (roles.includes(role)) {
        next(); 
      } else {
        return res.json({ message: "Access Denied" });
      }
    };
  };

  