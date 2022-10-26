const mongoose = require('mongoose');
import type { NextApiRequest, NextApiResponse } from 'next'



const connectDB = (handler:any)=> async(
   req: NextApiRequest,
  res: NextApiResponse
   ) => {

   await mongoose.connect(process.env.MONGO_URL);

   return handler(req,res);
}

export default connectDB;