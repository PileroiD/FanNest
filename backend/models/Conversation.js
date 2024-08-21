import mongoose from "mongoose";

const ConversationSchema = mongoose.Schema({}, { timestamps: true });

export default mongoose.model("Conversation", ConversationSchema);
