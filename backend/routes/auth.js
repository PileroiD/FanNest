import express from "express";

import * as UserController from "../controllers/user.js";
import { mapUser } from "../utils/mapUser.js";

const authRouter = express.Router({ mergeParams: true });

authRouter.post("/register", async (req, res) => {
    try {
        const { accessToken, refreshToken, user } =
            await UserController.register(req.body.email, req.body.password);

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: true,
            sameSite: "none",
        });

        res.send({
            error: null,
            accessToken,
            user: mapUser(user),
        });
    } catch (error) {
        console.log("error :>> ", error);

        res.send({
            error:
                error.code === 11000 ? "Email already exists" : error.message,
            user: null,
        });
    }
});

authRouter.post("/login", async (req, res) => {
    try {
        const { accessToken, refreshToken, user } = await UserController.login(
            req.body.email,
            req.body.password
        );

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: true,
            sameSite: "none",
        });

        res.send({
            error: null,
            accessToken,
            user: mapUser(user),
        });
    } catch (error) {
        console.log("error :>> ", error);

        res.send({
            error: error.message,
            user: null,
        });
    }
});

authRouter.post("/logout", (req, res) => {
    res.cookie("refreshToken", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none",
    });

    res.send({
        error: null,
        success: true,
    });
});

export default authRouter;
