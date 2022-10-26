
import AdminDashboard from "../../components/AdminDashboard/AdminDashboard";
import Layout from "../../components/Layout";
import UserDashboard from "../../components/UserDashboard";
import { getSession } from "next-auth/react";

const index = () => {

    const admin = true;
    return (
        
        <div className="mt-8 ml-5">
            
          <Layout>  
          <div className="">
          <h1 className="text-4xl hover:text-white text-gray-200 font-bold">Dashboard</h1> 
           {
            admin ? <AdminDashboard/> : <UserDashboard/>
           }
          
            
        </div>  
       
           </Layout> 
        </div>
        
    );
};

export default index;

export async function getServerSideProps (context:any){
    const session = await getSession(context.req);
    console.log(session);
     
    // if(!session){
    //     return{
    //         redirect:{
    //             destination:"/signup",
    //             permanent: false
    //         }
    //     }
    // }

    return{
        props:{ session }
    
    }
}