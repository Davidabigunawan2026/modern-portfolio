// --------  Tabel Database ---------

function RecentTable({ recent, onView }) {

    return (

        <div className="recent">

            <h2>Recent Messages</h2>

            <table>

                <thead>
                    <tr>

                        <th>No</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Action</th>

                    </tr>
                </thead>


                <tbody>

                    {
                        recent.length === 0 ?

                        (
                            <tr>
                                <td colSpan="5">
                                    No Messages
                                </td>
                            </tr>
                        )

                        :

                        (



                            //--------------------
                            recent.map((item, index) => (

                                <tr key={item.ID}>

                                    <td>{index + 1}</td>
                                    <td>{item.NAME}</td>
  
                                    <td>

                                        <span
                                            className={
                                                item.STATUS === "READ"
                                                ? "status-read"
                                                : "status-unread"
                                            }
                                            >
                                            {item.STATUS}
                                        </span>
                                    </td>


                                    <td>{item.CREATED_AT}</td>

                                    <td>

                                        <button
                                            className="btn-view"
                                            onClick={() => onView(item)}
                                            >

                                            View
                                        </button>

                                    </td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    );

}

export default RecentTable;
