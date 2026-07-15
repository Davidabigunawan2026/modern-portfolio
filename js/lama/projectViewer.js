const overview =
document.querySelector(".viewer-body .viewer-section p");

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

const moduleList =
    document.querySelector(".viewer-modules");


// ----------------------- General Ledger --------------------------
modules.forEach(item=>{

    item.addEventListener("click",()=>{
    const report = item.dataset.report;

        if(report==="coa"){
            reportPreview.innerHTML = `
                <img
                    src="Images/ChartOfAccount.png"
                    alt="Chart Of Account">
            `;
        }

        else if(report==="journal"){
            reportPreview.innerHTML = `
                <img
                    src="Images/Journal_Voucher.png"
                    alt="Journal Voucher">
            `;
        }

        else if(report==="ledger"){
            reportPreview.innerHTML = `
                <img
                    src="Images/General_Ledger.png"
                    alt="General Ledger">
            `;
        }

        else if(report==="trial"){
            reportPreview.innerHTML = `
                <img
                    src="Images/Trial_Balance.png"
                    alt="Trial Balance">
            `;
        }

        else if(report==="income"){
            reportPreview.innerHTML=`
                <img src="Images/Income_Statement.png"
                    alt="Income Statement">
            `;
        }

        else if(report==="balance"){
            reportPreview.innerHTML=`
                <img src="Images/Balance_Sheet.png"
                    alt="Balance Sheet">
            `;
        }


    });
});



// ---------------- HR Payroll ----------------
const hrPayroll =
document.getElementById("hrPayroll");


hrPayroll.addEventListener("click",()=>{

    viewerTitle.textContent =
    "HR & Payroll System";

    overview.textContent =
    "Complete Human Resource & Payroll Management System designed to manage employee information, attendance, payroll processing, leave management and HR reporting.";

    moduleList.innerHTML = `

        <li data-report="hrFeature">
            ✔ HR / Payroll Feature
        </li>

        <li data-report="hrReport">
            ✔ HR / Payroll Report List
        </li>

    `;

    reportPreview.innerHTML = `
        <p>Select a module to preview.</p>
    `;

    viewer.classList.add("active");
    bindHRModules();

});



function bindHRModules(){

    const hrModules =
    document.querySelectorAll(".viewer-modules li");
    hrModules.forEach(item=>{
        item.addEventListener("click",()=>{
            if(item.dataset.report==="hrFeature"){
                reportPreview.innerHTML=`
                    <img
                        src="Images/HR_Feature.png"
                        alt="HR Feature">
                `;
            }

            else if(item.dataset.report==="hrReport"){
                reportPreview.innerHTML=`
                    <img
                        src="Images/HR_ReportList.png"
                        alt="HR Report List">
                `;
            }
        });
    });
}



// ---------------- Production & Inventory ----------------

const productionInventory =
document.getElementById("productionInventory");

productionInventory.addEventListener("click",()=>{

    viewerTitle.textContent =
    "Production & Inventory System";

    overview.textContent =
    "Complete Production & Inventory Management System designed to manage purchasing, inventory control, warehouse operations, production planning, work orders, material usage and production reporting.";

    moduleList.innerHTML = `

        <li data-report="inventoryFeature">
            ✔ Inventory Feature
        </li>
        <li data-report="inventoryReport">
            ✔ Inventory Report List
        </li>
        <li data-report="productionFeature">
            ✔ Production Feature
        </li>
        <li data-report="productionReport">
            ✔ Production Report List
        </li>

    `;

    reportPreview.innerHTML = `
        <p>Select a module to preview.</p>
    `;

    viewer.classList.add("active");
    bindProductionModules();

});

function bindProductionModules(){

    const items =
    document.querySelectorAll(".viewer-modules li");

    items.forEach(item=>{
        item.addEventListener("click",()=>{
            switch(item.dataset.report){
                case "inventoryFeature":
                    reportPreview.innerHTML=`
                        <img
                            src="Images/IN_Feature.png"
                            alt="Inventory Feature">
                    `;

                    break;


                case "inventoryReport":
                    reportPreview.innerHTML=`
                        <img
                            src="Images/IN_ReportList.png"
                            alt="Inventory Report List">
                    `;

                    break;

                case "productionFeature":
                    reportPreview.innerHTML=`
                        <img
                            src="Images/PRO_Feature.png"
                            alt="Production Feature">
                    `;

                    break;

                case "productionReport":
                    reportPreview.innerHTML=`
                        <img
                            src="Images/PRO_ReportList.png"
                            alt="Production Report List">
                    `;
                    break;

            }

        });
    });
}


// ---------------- Sales & Distribution ----------------
const salesDistribution =
document.getElementById("salesDistribution");

salesDistribution.addEventListener("click",()=>{

    viewerTitle.textContent =
    "Sales & Distribution System";

    overview.textContent =
    "Complete Sales & Distribution Management System designed to manage customer orders, sales quotations, deliveries, invoicing, sales analysis and distribution reporting.";

    moduleList.innerHTML = `

        <li data-report="salesFeature">
            ✔ Sales Feature
        </li>

        <li data-report="salesReport">
            ✔ Sales Report List
        </li>

    `;

    reportPreview.innerHTML = `
        <p>Select a module to preview.</p>
    `;

    viewer.classList.add("active");
    bindSalesModules();
});


function bindSalesModules(){

    const salesModules =
    document.querySelectorAll(".viewer-modules li");
    salesModules.forEach(item=>{

        item.addEventListener("click",()=>{
            if(item.dataset.report==="salesFeature"){
                reportPreview.innerHTML=`
                    <img
                        src="Images/SAL_Feature.png"
                        alt="Sales Feature">
                `;
            }

            else if(item.dataset.report==="salesReport"){
                reportPreview.innerHTML=`
                    <img
                        src="Images/SAL_ReportList.png"
                        alt="Sales Report List">
                `;
            }
        });
    });
}



// ---------------- Account Receivable & Account Payable ----------------

const accountingSystem =
document.getElementById("accountingSystem");

accountingSystem.addEventListener("click",()=>{

    viewerTitle.textContent =
    "Account Receivable & Account Payable System";

    overview.textContent =
    "Complete Accounts Receivable and Accounts Payable Management System designed to manage customer receivables, vendor payables, invoice processing, payment scheduling, aging analysis, collections, and financial reporting.";

    moduleList.innerHTML = `

        <li data-report="arFeature">
            ✔ Account Receivable Feature
        </li>
        <li data-report="arReport">
            ✔ Account Receivable Report List
        </li>
        <li data-report="apFeature">
            ✔ Account Payable Feature
        </li>
        <li data-report="apReport">
            ✔ Account Payable Report List
        </li>

    `;

    reportPreview.innerHTML = `
        <p>Select a module to preview.</p>
    `;

    viewer.classList.add("active");
    bindAccountingModules();

});


function bindAccountingModules(){

    const accountingModules =
    document.querySelectorAll(".viewer-modules li");

    accountingModules.forEach(item=>{
        item.addEventListener("click",()=>{
            switch(item.dataset.report){
                case "arFeature":
                    reportPreview.innerHTML=`
                        <img
                            src="Images/AR_Feature.png"
                            alt="AR Feature">
                    `;
                    break;

                case "arReport":

                    reportPreview.innerHTML=`
                        <img
                            src="Images/AR_ReportList.png"
                            alt="AR Report List">
                    `;
                    break;

                case "apFeature":

                    reportPreview.innerHTML=`
                        <img
                            src="Images/AP_Feature.png"
                            alt="AP Feature">
                    `;
                    break;

                case "apReport":

                    reportPreview.innerHTML=`
                        <img
                            src="Images/AP_ReportList.png"
                            alt="AP Report List">
                    `;
                    break;
            }
        });
    });
}



