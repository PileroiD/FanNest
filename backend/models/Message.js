import mongoose from "mongoose";

const MessageSchema = mongoose.Schema(
    {
        conversation: {
            type: Schema.Types.ObjectId,
            ref: "Conversation",
            required: true,
        },
        sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
        receiver: { type: Schema.Types.ObjectId, ref: "User" },
        content: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("Message", MessageSchema);
