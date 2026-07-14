const viewer =
document.getElementById("projectViewer");

const viewerTitle =
document.getElementById("viewerTitle");

const viewerClose =
document.getElementById("viewerClose");

const generalLedger =
document.getElementById("generalLedger");

generalLedger.addEventListener("click",()=>{

    viewerTitle.textContent =
    "General Ledger System";

    viewer.classList.add("active");

});

viewerClose.addEventListener("click",()=>{

    viewer.classList.remove("active");

});





const reportPreview =
document.getElementById("reportPreview");

const modules =
document.querySelectorAll(".viewer-modules li");

modules.forEach(module=>{

    module.addEventListener("click",()=>{

        const report =
        module.dataset.report;

        if(report==="coa"){

            reportPreview.innerHTML=`

                <div class="coa-preview">

                    <h4>Chart of Accounts</h4>

                    <table class="coa-table">

                        <tr>

                            <th>Code</th>
                            <th>Account Name</th>
                            <th>Type</th>

                        </tr>

                        <tr>

                            <td>1000</td>
                            <td>Cash</td>
                            <td>Asset</td>

                        </tr>

                        <tr>

                            <td>1100</td>
                            <td>Bank</td>
                            <td>Asset</td>

                        </tr>

                        <tr>

                            <td>1200</td>
                            <td>Accounts Receivable</td>
                            <td>Asset</td>

                        </tr>

                        <tr>

                            <td>1300</td>
                            <td>Inventory</td>
                            <td>Asset</td>

                        </tr>

                        <tr>

                            <td>2000</td>
                            <td>Accounts Payable</td>
                            <td>Liability</td>

                        </tr>

                    </table>

                </div>

            `;

        }

    });

});