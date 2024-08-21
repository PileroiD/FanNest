import mongoose from "mongoose";

const GroupMessageSchema = mongoose.Schema(
    {
        group: { type: Schema.Types.ObjectId, ref: "Group", required: true },
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        content: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("GroupMessage", GroupMessageSchema);
