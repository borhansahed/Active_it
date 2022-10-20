import AdminChart from "./AdminChart";
import AdminDashboardCard from "./AdminDashboardCard";
import LastOrder from "./LastOrder";



const AdminDashboard = () => {
    return (
        <>
            <div>
                <div className="ml-16">

                    <AdminDashboardCard />

                </div>
                <div className=" flex  mt-5 hover:shadow-2xl">
                    <AdminChart/>
                    <LastOrder/>
                </div>
             
                
            </div>

        </>


    );
};

export default AdminDashboard;