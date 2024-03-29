import Collaboration from "@/models/collaborationsSchema";
import connectToDatabase from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        await connectToDatabase();

        const reqBody = await req.json();
        const { channelId, email } = reqBody;

        const existingCollaboration = await Collaboration.findOne({ email: email });
        if (existingCollaboration) {

            if (!existingCollaboration.channelId.includes(channelId)) {
                existingCollaboration.channelId.push(channelId);
                await existingCollaboration.save(); // Save the updated collaboration
            } else {
                console.log("Channel ID already exists in the collaboration");
                return NextResponse.json({ message: 'Collaboration already Exists', data: existingCollaboration });
            }

            return NextResponse.json({ message: 'Collaboration updated successfully!', data: existingCollaboration });
        }
        else {
            const newCollaboration = new Collaboration({
                channelId: [channelId],
                email: email,
            });

            // Save the new collaboration to the database
            const savedCollaboration = await newCollaboration.save();

            // Log the saved collaboration for debugging
            console.log("Saved Collaboration:", savedCollaboration);
            return NextResponse.json({ message: 'Collaboration created successfully!', data: savedCollaboration });
        }



    } catch (error) {
        console.error("Error creating collaboration:", error.message);

        // Send an error response with status code 500 and the error message
        return NextResponse.json({ message: 'Error creating collaboration', error: error.message });
    }
}

