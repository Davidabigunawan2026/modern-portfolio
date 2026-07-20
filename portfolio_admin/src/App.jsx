
import "./App.css";
import Sidebar from "./component/Sidebar";
import Dashboard from "./pages/Dashboard";
import Message from "./pages/Messages";

import { useState } from "react";


function App() {

        const [page, setPage] = useState("dashboard");

    return (

        <div className="container">

            <Sidebar
                page={page}
                setPage={setPage}
            />



            <main className="content">

                {page === "dashboard" && <Dashboard />}
                
                {page === "message" && <Message />}

            </main>

        </div>

    );

}

export default App;


