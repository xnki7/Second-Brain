import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { ContentModel, LinkModel, UserModel } from './db';
import { userMiddleware } from './middleware';
import { random } from './utils';
import cors from "cors";
import { JWT_PASSWORD } from './config';

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/v1/signup", async (req, res) => {
    // TODO: ZOD validation and hash the password
    const { username, password } = req.body;
    try {
        await UserModel.create({ username: username, password: password });
        res.json({ message: "User signed up" });
    } catch (error) {
        res.status(411).json({ message: "User already exists" });
    }
});

app.post("/api/v1/signin", async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await UserModel.findOne({ username: username, password: password });
    if (existingUser) {
        const token = jwt.sign({ _id: existingUser._id }, JWT_PASSWORD);
        res.json({ token });
    } else {
        res.status(403).json({ message: "Invalid username or password" });
    }
});

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const { title, type, link } = req.body;
    await ContentModel.create({
        title,
        type,
        link,
        userId: req.userId,
        tags: []
    });

    res.json({ message: "Content created" });
});

app.get("/api/v1/content", userMiddleware, async (req, res) => {
    const userId = req.userId;
    const content = await ContentModel.find({ userId: userId }).populate("userId", "username");
    res.json(content);
});

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    await ContentModel.deleteOne({
        _id: contentId,
        userId: req.userId
    });

    res.json({ message: "Content deleted" });
});

app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const { share } = req.body;
    if (share) {
        const existingLink = await LinkModel.findOne({
            userId: req.userId
        });

        if (existingLink) {
            res.json({
                hash: existingLink.hash
            })
            return;
        }
        const hash = random(10);
        await LinkModel.create({
            userId: req.userId,
            hash: hash
        })

        res.json({
            hash
        })
    } else {
        await LinkModel.deleteOne({ userId: req.userId });
        res.json({
            message: "Removed link"
        })
    }

    res.json({ message: "Updated share link" });
});

app.get("/api/v1/brain/:shareLink", userMiddleware, async (req, res) => {
    const shareLink = req.params.shareLink;
    const link = await LinkModel.findOne({ hash: shareLink });

    if (!link) {
        res.status(411).json({ message: "Link not found" });
        return;
    }

    const content = await ContentModel.find({ userId: link.userId });

    const user = await UserModel.findById(link.userId);

    if (!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        })
        return;
    }

    res.json({
        username: user.username,
        content
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});