import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_PASSWORD = "!23123";

export const userMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(403).json({ message: "Token is required" });
        return;
    }

    try {
        const decoded = jwt.verify(token as string, JWT_PASSWORD);
        if (decoded) {
            req.userId = (decoded as JwtPayload)._id;
            next();
        } else {
            res.status(403).json({ message: "Invalid token" });
        }
    } catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
};
