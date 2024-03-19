import AdminOrder from "../features/admin/components/AdminOrder";
import Navbar from "../features/navbar/Navbar";

function AdminOrderPage() {
    return ( 
        <div>
            <Navbar>
                <AdminOrder></AdminOrder>
            </Navbar>
        </div>
     );
}

export default AdminOrderPage;