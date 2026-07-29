function MessageTable({ messages }) {

    return (

        <div className="recent">

            <h2>Total Messages : {messages.length}</h2>

            <table>

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        messages.length === 0 ?

                        (

                            <tr>

                                <td colSpan="6">

                                    No Messages

                                </td>

                            </tr>

                        )

                        :

                        (

                            messages.map((item) => (

                                <tr key={item.ID}>

                                    <td>{item.ID}</td>
                                    <td>{item.NAME}</td>
                                    <td>{item.EMAIL}</td>
                                    <td>{item.PHONE}</td>
                                    <td>{item.STATUS}</td>

                                    <td>

                                        <button>

                                            View

                                        </button>

                                        <button>

                                            Delete

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

export default MessageTable;
