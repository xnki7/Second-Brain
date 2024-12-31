import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { ContentModel, UserModel } from './db';
import { userMiddleware } from './middleware';
import ts from 'typescript';

const JWT_PASSWORD = "123123";

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
    // TODO: ZOD validation and hash the password
    const { username, password } = req.body;
    try {
        await UserModel.create({ username: username, password: password });
        res.json({ message: "User created" });
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
        // @ts-ignore
        userId: req.userId
    });

    res.json({ message: "Content created" });
});

app.get("/api/v1/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({ userId: userId }).populate("userId", "username");
    res.json(content);
});

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    await ContentModel.deleteOne({
        _id: contentId,
        //@ts-ignore
        userId: req.userId
    });

    res.json({ message: "Content deleted" });
});

app.post("/api/v1/brain/share", async (req, res) => {
});

app.get("/api/v1/brain/:shareLink", async (req, res) => {
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});