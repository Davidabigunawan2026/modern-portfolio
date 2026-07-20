import { useEffect, useState } from "react";
import RecentTable from "../component/RecentTable";
import MessageModal from "../component/MessageModal";


function Dashboard() {

    const [dashboard,setDashboard] = useState({
        total:0,
        unread:0,
        read:0,
        recent:[]
    });

    const [selectedMessage, setSelectedMessage] = useState(null);
    

    useEffect(() => {

        loadDashboard();

    }, []);

    async function loadDashboard() {

        const response =
            await fetch("http://localhost:3000/api/dashboard");

        const data =
            await response.json();

        setDashboard(data);

    }


    async function viewMessage(item) {

            if (item.STATUS === "UNREAD") {
                await fetch(`http://localhost:3000/api/message/${item.ID}`, {
                    method: "PUT"
                });

                await loadDashboard();

            }

            setSelectedMessage({
                ...item,
                STATUS: "UNREAD"
            });
    }



    return (

        <div className="dashboard">

            <h1>Portfolio Admin Dashboard</h1>

            <div className="cards">

                <div className="card stat-card">

                    <span>📩 Total Messages</span>
                    <strong>{dashboard.total}</strong>

                </div>

                <div className="card stat-card">

                    <span>📬 Unread</span>
                    <strong>{dashboard.unread}</strong>

                </div>

                <div className="card stat-card">
                    <span>✅ Read</span>
                    <strong>{dashboard.read}</strong>
                </div>

            </div>

            <RecentTable
                recent={dashboard.recent}
                onView={viewMessage}
            />

            <MessageModal
                message={selectedMessage}
                onClose={() => setSelectedMessage(null)}
            />



        </div>

    );

}

export default Dashboard;
