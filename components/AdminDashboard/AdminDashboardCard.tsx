import { Card, Grid, Text } from "@nextui-org/react";

import { HiDocumentReport } from "@react-icons/all-files/hi/HiDocumentReport";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";


const AdminDashboardCard = () => {
    return (
        <div className="mt-7 ">
          <div>
          <Grid.Container className='' gap={6} justify="space-between">
      <Grid>
      <Card  isHoverable variant="bordered" css={{ width: "250px", background: "$gray400" }}>
      <Card.Body className="flex justify-center ">
        <div className="flex  gap-x-1 ml-5">
            <h1 className="text-2xl text-gray-500 mt-2"><HiDocumentReport/></h1>
            <div className="">
              <Text className="text-2xl">Total Earning</Text>   
              <span className="ml-6">Last (30days)</span>
            </div>
           
        </div>
        
        <Text className="text-2xl font-semibold lg:ml-20 mt-2">$2000</Text>
      </Card.Body>
    </Card>
      </Grid>
      <Grid >
      <Card isHoverable variant="bordered"css={{ width: "250px",background: "$gray400"  }}>
      <Card.Body className="flex justify-center ">
        <div className="ml-10">
          <Text className="text-2xl">Total Orders</Text>   
              <span className="ml-6">Last (30days)</span>  
        </div>
        
        <div className="flex justify-center items-center gap-x-2 mr-4">
            <h1 className="text-xl text-gray-400 mt-2"><FaShoppingCart/></h1>
           
               <Text className="text-2xl font-semibold mt-2">22</Text>
           
           
        </div>
        
       
      </Card.Body>
    </Card>
      </Grid>
      <Grid >
      <Card isHoverable variant="bordered" css={{ width: "250px", background: "$gray400" }}>
      <Card.Body className="flex justify-center ">
        <div className="ml-10">
          <Text className="text-2xl">Total Orders</Text>  
        
             
        </div>
        
        <div className="flex justify-center items-center gap-x-2 mr-4">
            <h1 className="text-xl text-gray-400 mt-2"><FaShoppingCart/></h1>
           
               <Text className="text-2xl font-semibold mt-2">122</Text>
           
           
        </div>
        
       
      </Card.Body>
    </Card>
      </Grid>
      <Grid>
      <Card isHoverable variant="bordered" css={{ width: "250px", background: "$gray400" }}>
      <Card.Body className="flex justify-center ">
        <div className="flex items-center gap-x-1 ml-6">
            <h1 className="text-2xl text-gray-500"><HiDocumentReport/></h1>
          <Text className="text-2xl">Total Revenue</Text>  
        </div>
        
        <Text className="text-2xl font-semibold lg:ml-20 mt-2">$20000</Text>
      </Card.Body>
    </Card>
      </Grid>
    </Grid.Container>
          </div>
           
        </div>
    );
};

export default AdminDashboardCard;