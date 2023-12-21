const moongoose = require("mongoose");
const { Schema } = moongoose;

const userSchema = new Schema({
    displayName: {
        type: String,
        required: true
    },
    profileImage: String,
    bio: String,
    accountId: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
})

const User = moongoose.model("User", userSchema);

module.exports = User;