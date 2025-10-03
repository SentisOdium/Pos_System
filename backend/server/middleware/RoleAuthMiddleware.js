export function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    //checks if user has the role or includes the role assigned i.e. admin or user
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: "Access forbidden: insufficient permissions" });
    }
    next();
  };
}
