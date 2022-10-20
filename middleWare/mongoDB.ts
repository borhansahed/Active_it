const mongoose = require('mongoose');
import type { NextApiRequest, NextApiResponse } from 'next'



const connectDB = (handler:any)=> async(
   req: NextApiRequest,
  res: NextApiResponse
   ) => {

   await mongoose.connect('mongodb+srv://activeIt:activeIt1100@activeit.naadcfr.mongodb.net/test');

   return handler(req,res);
}

export default connectDB;