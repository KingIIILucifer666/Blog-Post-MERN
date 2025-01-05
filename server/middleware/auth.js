import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  try {
    const authHeaders = req.headers["authorization"];
    const token = authHeaders && authHeaders.split(" ")[1];

    if (!token) {
      // console.log("Token missing in request headers");
      return res.status(401).json({ message: "Authorization Token Missing!" });
    }

    jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
      if (error) {
        return res.status(403).json({ message: "Invalid Token" });
      }

      req.body.user = user;

      next();
    });
  } catch (error) {
    console.log("JWT Verification Error:", error);
    return res.status(401).json({ message: "Unauthorized (JWT error)" });
  }
};

export default verifyToken;
