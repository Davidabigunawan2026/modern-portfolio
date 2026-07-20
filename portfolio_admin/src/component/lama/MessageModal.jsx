// ---------  Menampilkan PopUp View 1  records Tabel Contact  ---------  

function MessageModal({ message, onClose, onDelete }) {

    if (!message) return null;

    return (

        <div className="modal-overlay">

            <div className="modal">
                <h2>Message Detail</h2>
                <hr />
                    <p><b>Name :</b> {message.NAME}</p>
                    <p><b>Phone :</b> {message.PHONE}</p>
                    <p><b>Email :</b> {message.EMAIL}</p>
                    <p><b>Date :</b> {message.CREATED_AT}</p>
                    <p><b>Status :</b> {message.STATUS}</p>
                <hr />

                <h3>Message</h3>
                <div className="message-box">
                    {message.MESSAGE}
                </div>
                <div className="modal-footer">

                    <button
                        className="btn-delete"
                        onClick={() => onDelete(message)}
                    >
                        Delete
                    </button>

                    <button
                        className="btn-close"
                        onClick={onClose}
                    >
                        Close
                    </button>



                </div>
            </div>
        </div>

    );

}

export default MessageModal;
