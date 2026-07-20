//  menampilkan isi Tabel  Contact
//  menampilkan  View PopUp


import { useEffect, useState } from "react";
import RecentTable from "../component/RecentTable";
import MessageModal from "../component/MessageModal";

function Message() {

    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);


    useEffect(() => {
        loadMessage();
    }, []);


    async function loadMessage() {

        const response =
            await fetch("http://localhost:3000/api/message");

        const data =
            await response.json();

        setMessages(data);

    }


        async function viewMessage(item) {

            if (item.STATUS === "UNREAD") {
                await fetch(`http://localhost:3000/api/message/${item.ID}`, {
                    method: "PUT"
                });
                await loadMessage();
            }

            setSelectedMessage({
                ...item,
                STATUS: "READ"
            });
        }



        async function deleteMessage(item) {

                const jawab =
                    window.confirm(
                        `Hapus pesan dari ${item.NAME} ?`
                    );

                if (!jawab) return;

                await fetch(
                    `http://localhost:3000/api/message/${item.ID}`,
                    {
                        method: "DELETE"
                    }
                );

                setSelectedMessage(null);
                await loadMessage();

        }


    return (

        <div className="dashboard">

            <h1>Message List</h1>

            <RecentTable
                recent={messages}
                onView={viewMessage}
            />


            <MessageModal
                message={selectedMessage}
                onClose={() => setSelectedMessage(null)}
                onDelete={deleteMessage}
            />


        </div>



    );

}

export default Message;




