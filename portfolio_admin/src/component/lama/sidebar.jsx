//  ------- Menu Kiri : Dashboard, Message, Logout -------

function Sidebar({ page, setPage }) {

    return (

        <aside className="sidebar">

            <h2 className="logo">
                Portfolio Admin
            </h2>


            <ul className="menu">

                <li
                    className={page === "dashboard" ? "active" : ""}
                    onClick={() => setPage("dashboard")}
                >
                    📊 Dashboard
                </li>

                <li
                    className={page === "message" ? "active" : ""}
                    onClick={() => setPage("message")}
                >
                    💬 Message
                </li>


                <li
                    onClick={logout}
                    style={{ cursor: "pointer" }}
                >
                    🚪 Logout
                </li>


            </ul>


        </aside>

    );


    function logout() {

        const jawab = window.confirm(
            "Yakin ingin keluar dari Admin?"
        );

        if (!jawab) return;

        window.location.href = "http://localhost:3000";

    }


}

export default Sidebar;
