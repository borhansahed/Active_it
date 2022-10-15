import AdminChart from "./AdminChart";
import AdminDashboardCard from "./AdminDashboardCard";



const AdminDashboard = () => {
    return (
        <>
            <div>
                <div className="ml-16">

                    <AdminDashboardCard />

                </div>
                <div className="mt-5">
                    <AdminChart/>
                </div>
            </div>

        </>


    );
};

export default AdminDashboard;