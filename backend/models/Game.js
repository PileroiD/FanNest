import mongoose from "mongoose";

const GameSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        developer: { type: String },
        platforms: { type: String },
        system_requirements: { type: String },
        buy_links: [{ type: String }],
        articles: [
            {
                type: Schema.Types.ObjectId,
                ref: "Article",
                required: true,
            },
        ],
    },
    { timestamps: true }
);

export default mongoose.model("Game", GameSchema);
