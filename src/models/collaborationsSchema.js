import mongoose from 'mongoose';

const collaborationsSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    channelId:{
        type:Array,
        required:true,
    },
    uploadsApproved:{
        type:Number,
        default:0
    }
});

let Collaboration;
try {
    Collaboration = mongoose.model("Collaboration");
} catch {
    Collaboration = mongoose.model("Collaboration", collaborationsSchema);
}

export default Collaboration;
