import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import connectToDatabase from '@/dbConfig/dbConfig.js'; // Assuming you have a MongoDB connection utility
import User from '@/models/userSchema';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({user}) {
      try {
        const db = await connectToDatabase();

        // Check if the user already exists in the database
        const existingUser = await User.findOne({ email: user.email });

        if (existingUser) {
          console.log('User already exists in the database.');
        } else {
          // Insert user data into MongoDB (if first-time sign-in)
          const newUser = new User({
            googleId: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          });
          await newUser.save();
          console.log('User data inserted into MongoDB successfully.');
        }

        // Add user information to the session
        console.log(user)
        return {user};
      } catch (error) {
        console.error('Error checking or inserting user data into MongoDB:', error);
        return false;
      }
    },
    
  },
});

export {handler as GET , handler as POST}; // No need for separate GET/POST exports
