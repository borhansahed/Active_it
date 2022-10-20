import type { NextApiRequest, NextApiResponse } from 'next'
import Order from '../../models/Order'
import connectDB from '../../middleWare/mongoDB'

// type Data = {
 
 
// }
interface Data {
   message: string | any,
  
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {

    if(req.method === 'POST'){
      let order = new Order(req.body);
      await order.save((err:string,)=>{

        if(err){
          res.status(400).json({message: "Error"})
        }else{
          res.status(200).json({message: order})
        }
      })
    }else{
        res.status(400).json({message: "Error"})
    }


}

export default connectDB(handler);