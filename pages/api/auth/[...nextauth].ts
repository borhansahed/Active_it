import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from '../../../middleWare/mongoDB';
import User from '../../../models/User';
const mongoose = require('mongoose');


export default NextAuth({
  providers: [
   // google
    GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID as string,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // 
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials:any, req:any) {
         
       await mongoose.connect(process.env.MONGO_URL);

       const result = await User.findOne({email:credentials.email})
       if(!result){
        throw new Error("Not matched")
       }

       const userPassword = credentials.password === result.password;
 
       if(!userPassword || result.email !== credentials.email){
        throw new Error("User and Password not Matched");
       }
      return result;
       
      }
    })

  ],
})