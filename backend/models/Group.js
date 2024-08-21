import mongoose from "mongoose";

const GroupSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Group name is required"],
            trim: true,
            minlength: [2, "Group name must be at least 3 characters long"],
            maxlength: [100, "Group name cannot exceed 100 characters"],
        },
        description: {
            type: String,
            trim: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Group", GroupSchema);
