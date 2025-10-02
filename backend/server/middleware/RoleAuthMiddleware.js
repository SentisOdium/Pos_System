export function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    //checks if there is user or if the req.user's role exist
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: "Access forbidden: insufficient permissions" });
    }
    next();
  };
}
