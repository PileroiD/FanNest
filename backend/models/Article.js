import mongoose from "mongoose";

const ArticleSchema = mongoose.Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "User ID is required"],
        },
        title: {
            type: String,
            required: [true, "Article title is required"],
            trim: true,
            minlength: [2, "Article title must be at least 5 characters long"],
            maxlength: [200, "Article title cannot exceed 200 characters"],
        },
        content: {
            type: String,
            required: [true, "Article content is required"],
        },
        image_url: {
            type: String,
            validate: {
                validator: function (v) {
                    return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/.test(v);
                },
                message: "Invalid image URL",
            },
        },
        video_url: {
            type: String,
            validate: {
                validator: function (v) {
                    return /^(https?:\/\/.*\.(?:mp4|avi|mov))$/.test(v);
                },
                message: "Invalid video URL",
            },
        },
    },
    { timestamps: true }
);

export default mongoose.model("Article", ArticleSchema);
