import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    image: {
        type: String,
        trim: true,
    },
});

let User;
try {
    User = mongoose.model("User");
} catch {
    User = mongoose.model("User", userSchema);
}

export default User;
