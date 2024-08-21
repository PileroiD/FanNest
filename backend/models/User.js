import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
            trim: true,
            minlength: [3, "Username must be at least 3 characters long"],
            maxlength: [30, "Username cannot exceed 30 characters"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            lowercase: true,
            match: [/.+@.+\..+/, "Please enter a valid email address"],
        },
        password_hash: {
            type: String,
            required: [true, "Password hash is required"],
        },
        desc: {
            type: String,
            maxlength: [100, "User description cannot exceed 100 characters"],
        },
        avatar_url: {
            type: String,
            validate: {
                validator: function (v) {
                    return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/.test(v);
                },
                message: "Invalid avatar URL",
            },
        },
        background_url: {
            type: String,
            validate: {
                validator: function (v) {
                    return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/.test(v);
                },
                message: "Invalid background image URL",
            },
        },
    },
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);
