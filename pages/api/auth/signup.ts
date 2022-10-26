import connectDB from "../../../middleWare/mongoDB";
import type { NextApiRequest, NextApiResponse } from 'next'
import Users from '../../../models/User'






type Data = {
 message: string | any
}


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) => {
  
   if(req.method === 'POST'){

    if(!req.body){
        return res.status(404).json({message:'Body not founded'})
    }
     const {name,email,password,number} = req.body;
     console.log(number)
     
     
     const exits = await Users.findOne({email});
     if(exits){
        return res.status(404).json({message:'Already Exits'})
     }

     Users.create({name,email,password,number},(err:any, data:any) =>{
      
        if(err){
            return res.status(404).json({message:err})
        }else{
          res.status(200).json({message:data})
        }
        
     })

   }else{
    res.status(400).json({message:'error'});
   }
  
  
  }

export default connectDB(handler);