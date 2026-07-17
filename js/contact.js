/*=========================================
    CONTACT FORM
=========================================*/

const contactForm = document.getElementById("contactForm");


const successModal =
document.getElementById("successModal");

const successButton =
document.getElementById("successButton");


/*=========================================
    SEND MESSAGE
=========================================*/

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


        const response = await fetch("/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                name,
                phone,
                email,
                message

            })

        });



        const result = await response.json();

        if(result.success){

            successModal.classList.add("show");
            contactForm.reset();
            document.getElementById("name").focus();

        }else{
            alert("❌ Failed to send message.");
        }

        console.log(result);


        /*=========================================
        SUCCESS BUTTON
        =========================================*/

        successButton.addEventListener("click",function(){
            successModal.classList.remove("show");
        });


});

