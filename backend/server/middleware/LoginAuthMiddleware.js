import jwt from 'jsonwebtoken';

export function authenticateToken(req, res, next) {
  // Try getting token from Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

  // Or fallback to cookie (if you’re setting it in login)
  const cookieToken = req.cookies?.token;

  const finalToken = token || cookieToken;
  
  //if no tokens, it will prevent access
  if (!finalToken) {
    return res.status(401).json({
      message: 'Unauthorized. No token provided.'
    });
  }

  try {
    //decode jwt token, either token or cookieToken
    const decoded = jwt.verify(finalToken, process.env.TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      message: 'Forbidden - Invalid or expired token',
    });
  }
}

