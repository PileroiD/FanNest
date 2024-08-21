import mongoose from "mongoose";

const CommentsSchema = mongoose.Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        article: {
            type: Schema.Types.ObjectId,
            ref: "Article",
            required: true,
        },
        parent: { type: Schema.Types.ObjectId, ref: "Comment" }, // Nullable
        content: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("Comments", CommentsSchema);
