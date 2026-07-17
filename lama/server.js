/*=========================================
    IMPORT LIBRARIES
=========================================*/

const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");


/*=========================================
    CREATE EXPRESS APP
=========================================*/

const app = express();
const PORT = 3000;

/*=========================================
    STATIC FILES
=========================================*/

app.use(express.static(__dirname));

/*=========================================
    USE JSON
=========================================*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



/*=========================================
    CONNECT TO SQLITE DATABASE
=========================================*/

const db = new sqlite3.Database(

    path.join(__dirname, "database", "portfolio.db"),

    (err)=>{

        if(err){
            console.error("Database Error :", err.message);
        }else{
            console.log("SQLite Connected.");
        }

    }

);


/*=========================================
    HOME PAGE
=========================================*/

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});



/*=========================================
    CONTACT API
=========================================*/

app.post("/contact", (req, res) => {

    const sql = `
        INSERT INTO CONTACT
        (NAME, PHONE, EMAIL, MESSAGE)
        VALUES (?, ?, ?, ?)
    `;

    db.run(

        sql,

        [
            req.body.name,
            req.body.phone,
            req.body.email,
            req.body.message
        ],

        function(err){

            if(err){

                console.error(err.message);
                return res.status(500).json({
                    success:false,
                    message:"Database Error"
                });

            }

            res.json({

                success:true,
                message:"Message Saved Successfully",
                id:this.lastID

            });
        }
    );

});




/*=========================================
    START SERVER
=========================================*/

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});










