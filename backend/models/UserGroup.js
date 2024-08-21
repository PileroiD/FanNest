import mongoose from "mongoose";

const UserGroupSchema = mongoose.Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        group: { type: Schema.Types.ObjectId, ref: "Group", required: true },
    },
    { timestamps: true }
);

export default mongoose.model("UserGroup", UserGroupSchema);
