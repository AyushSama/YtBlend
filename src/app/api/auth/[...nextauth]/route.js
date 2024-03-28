import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import connectToDatabase from '@/dbConfig/dbConfig.js'; // assuming you have a MongoDB connection utility
import User from '@/models/userSchema';


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user }) {

            console.log(user);

            try {
                
                const db = await connectToDatabase();
                console.log(db);
                
                // Check if the user already exists in the database
                const existingUser = await User.findOne({ email: user.email });

                if (existingUser) {
                    console.log('User already exists in the database.');
                } else {
                    // Insert user data into MongoDB
                    const newUser = await User({
                        googleId: user.id,
                        name: user.name,
                        email: user.email,
                        image: user.image,
                    });

                    const savedUser = await newUser.save()
                    console.log(savedUser);
                    console.log('User data inserted into MongoDB successfully.');
                }
                return true;
            } catch (error) {
                console.log("Error Inserting into DB");
                console.error('Error checking or inserting user data into MongoDB:', error);
                return false;
            }

        },
    },
});

export { handler as GET, handler as POST }