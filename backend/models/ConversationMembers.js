import mongoose from "mongoose";

const ConversationMembersSchema = mongoose.Schema(
    {
        conversation: {
            type: Schema.Types.ObjectId,
            ref: "Conversation",
            required: true,
        },
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    },
    { timestamps: true }
);

export default mongoose.model("ConversationMembers", ConversationMembersSchema);
