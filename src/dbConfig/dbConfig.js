import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("Connected To Database Successfully!!");
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log("Something Went Wrongg!!");
        console.log(error);
    }
}

export default connectToDatabase;