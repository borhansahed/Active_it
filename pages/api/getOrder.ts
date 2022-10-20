import type { NextApiRequest, NextApiResponse } from 'next'
import Order from '../../models/Order'
import connectDB from '../../middleWare/mongoDB'


type Data = {
 orders: any
}


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) => {
  
    let orders:any = await Order.find();

    res.status(200).json({orders})
  
  
  }
  
  export default connectDB(handler);