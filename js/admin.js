/*==================================================
    TABLE BODY
==================================================*/

const messageTable =
document.getElementById("messageTable");

const totalMessage =
document.getElementById("totalMessage");



/*==================================================
    MODAL
==================================================*/

const messageModal =
document.getElementById("messageModal");

const modalName =
document.getElementById("modalName");

const modalPhone =
document.getElementById("modalPhone");

const modalEmail =
document.getElementById("modalEmail");

const modalMessage =
document.getElementById("modalMessage");

const closeModal =
document.getElementById("closeModal");



/*==================================================
    LOAD CONTACT
==================================================*/


async function loadContact(){

    const response = await fetch("/api/contact");
    const contacts = await response.json();


    totalMessage.textContent = contacts.length;
    messageTable.innerHTML = "";


    contacts.forEach(contact => {

        messageTable.innerHTML += `

            <tr>
                <td>${contact.ID}</td>
                <td>${contact.NAME}</td>
                <td>${contact.PHONE}</td>
                <td>${contact.EMAIL}</td>

                <td>
                    <button
                        class="btn-view"
                        data-id="${contact.ID}"
                        data-name="${contact.NAME}"
                        data-phone="${contact.PHONE}"
                        data-email="${contact.EMAIL}"
                        data-message="${contact.MESSAGE}">
                        View
                    </button>
                </td>

            </tr>
        `;
    });


    // PASANG EVENT SETELAH TOMBOL DIBUAT
    document.querySelectorAll(".btn-view").forEach(button => {

        button.addEventListener("click", function(){

            modalName.textContent = this.dataset.name;
            modalPhone.textContent = this.dataset.phone;
            modalEmail.textContent = this.dataset.email;
            modalMessage.textContent = this.dataset.message;

            messageModal.style.display = "flex";

        });

    });

}

    loadContact();


    /*==================================================
    CLOSE MODAL
    ==================================================*/

    closeModal.addEventListener("click", function(){
        messageModal.style.display = "none";
    });




