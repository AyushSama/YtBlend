import connectToDatabase from "@/dbConfig/dbConfig";
import Collaboration from "@/models/collaborationsSchema";
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
    try {
        // Connect to the database
        await connectToDatabase();

        // Retrieve collaborations from the database
        const reqBody = await req.json();
        console.log(reqBody);

        const email = reqBody.email;

        console.log(email);

        const collaborations = await Collaboration.findOne({ email: email });

        if (!collaborations) {
            console.log("No Collaborations Yet!!");
            return NextResponse.json({ message: "No Collaborations Yet." });
        }

        const approvals = collaborations.uploadsApproved;
        console.log(approvals);
        // Extract channel IDs from the collaborations object
        const allChannelIds = collaborations.channelId;

        if (!allChannelIds || allChannelIds.length === 0) {
            console.log("No channel IDs found in collaborations.");
            return NextResponse.json({ message: "No channel IDs found." });
        }

        console.log(allChannelIds)

        // Function to fetch channel details using a single API request
        const fetchChannelDetails = async (channelId) => {
            const url = `https://www.googleapis.com/youtube/v3/channels`;
            const params = {
                part: "snippet,statistics",
                id: channelId,
                key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY, // Replace with your actual API key
            };

            try {
                const response = await axios.get(url, { params });
                return response.data.items[0]; // Return the channel details object
            } catch (error) {
                console.error(`Error fetching channel details for ${channelId}:`, error);
                return null; // Indicate failure to fetch details for a particular channel
            }
        };

        // // Fetch channel details concurrently using Promise.all
        const channelDetails = await Promise.all(
            allChannelIds.map(fetchChannelDetails)
        );

        // // Filter out channels for which details couldn't be fetched
        const successfulDetails = channelDetails.filter(Boolean);

        // // Return the response with channel details (or an error message if none)
        return NextResponse.json({
            message: successfulDetails.length > 0 ? "Channel details retrieved successfully." : "Failed to retrieve some channel details.",
            data: successfulDetails,
            uploadApproved: approvals,
        });
    } catch (error) {
        console.error("Collaborations Not Retreived:", error.message);
        return NextResponse.json({ message: "Collaborations not retrieved!" });
    }
}
