
import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
    const token=req.cookies.accessToken;
    // const token = req.headers.authorization || req.cookies.accessToken || req.query.token;
    // const token = req.headers['x-access-token'] || req.headers['authorization']||req.query['token']||req.cookies['accessToken']
    if (!token) {
        return res.status(401).json({ success: false, message: "You are not authorized!" });
    }

    // if token exists then verifying token for the same
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ success: false, message: "Token is invalid!" });
        }

        req.user = user;
        next();
    });
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res,next, () => {
        if (req.user.id===req.params.id || req.user.role==='admin') {
            next();
        } else {
            return res.status(401).json({ success: false, message: "You are not authenticated!" });
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res,next, () => {
        if (req.user.role === "admin") {
            next();
        } else {
            return res.status(401).json({ success: false, message: "You are not authorized!" });
        }
    });
};



