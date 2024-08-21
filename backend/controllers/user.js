import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

import UserModel from "../models/User.js";

// Register
export const register = async (email, password) => {
    if (!password || !email) {
        throw new Error("Incorrect data entered");
    }

    const oldUser = await UserModel.findOne({ email }).exec();

    if (oldUser) throw new Error("User already exists");

    const passwordHash = await bcrypt.hash(password, 10);

    const username = email.split("@")[0];
    const user = await UserModel.create({
        username,
        email,
        password_hash: passwordHash,
    });

    const tokens = issueTokens(user._id);

    return { ...tokens, user };
};

// LogIn
export const login = async (email, password) => {
    const user = await UserModel.findOne({ email });

    if (!user) {
        throw new Error("User not found");
    }

    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password_hash
    );

    if (!isPasswordCorrect) {
        throw new Error("Invalid email or password");
    }

    const tokens = issueTokens(user._id);

    return { ...tokens, user };
};

function issueTokens(userId) {
    const accessToken = jwt.sign({ id: userId }, process.env.JWT_KEY, {
        expiresIn: "1h",
    });

    const refreshToken = jwt.sign({ id: userId }, process.env.JWT_KEY, {
        expiresIn: "30d",
    });

    return { accessToken, refreshToken };
}
