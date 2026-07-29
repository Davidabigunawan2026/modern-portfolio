//  Fungsi :  Connect ke SQLITE
//  Perintah2  SQL


/*=========================================
    IMPORT LIBRARIES
=========================================*/

const cors = require("cors");
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");


/*=========================================
    CREATE EXPRESS APP
=========================================*/

const app = express();
const PORT = process.env.PORT || 3000;


/*=========================================
    STATIC FILES
=========================================*/

app.use(cors());
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
    HOME PAGE  PORTFOLIO
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
        (
            NAME,
            PHONE,
            EMAIL,
            MESSAGE,
            CREATED_AT,
            STATUS
        )
        VALUES
        (
            ?, ?, ?, ?,
            datetime('now','localtime'),
            'UNREAD'
        )
    `;

    
    console.log("INSERT CONTACT");
    console.log(sql);

    
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
    DASHBOARD API
=========================================*/

app.get("/api/dashboard", (req, res) => {

    const dashboard = {};

    db.get(

        `
        SELECT
            COUNT(*) AS total,
            SUM(CASE WHEN STATUS = 'UNREAD' THEN 1 ELSE 0 END) AS unread,
            SUM(CASE WHEN STATUS = 'READ' THEN 1 ELSE 0 END) AS read
        FROM CONTACT
        `,
        [],
        (err, row) => {

            if (err) {
                return res.status(500).json(err);
            }

            dashboard.total = row.total;
            dashboard.unread = row.unread || 0;
            dashboard.read = row.read || 0;

    
            
            //  --------------------  DISPLAY TABEL DI DASHBOARD -----------

            db.all(

                `
                SELECT
                    ID,
                    NAME,
                    COALESCE(PHONE,'') AS PHONE,
                    COALESCE(EMAIL,'') AS EMAIL,
                    COALESCE(MESSAGE,'') AS MESSAGE,
                    COALESCE(CREATED_AT,'-') AS CREATED_AT,
                    COALESCE(STATUS,'UNREAD') AS STATUS
                FROM CONTACT
                WHERE STATUS='UNREAD'
                ORDER BY ID DESC
                LIMIT 5
                `,

                [],

                (err, rows) => {

                    if (err) {
                        return res.status(500).json(err);
                    }

                    dashboard.recent = rows;
                    res.json(dashboard);

                }

        );



        }
    );
});




/*=========================================
    START SERVER
=========================================*/

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});



/*=========================================
    HOME PAGE
=========================================*/


/*=========================================
    ADMIN PAGE
=========================================*/

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "admin.html"));
});


/*=========================================
    GET CONTACT LIST
=========================================*/

app.get("/api/message", (req, res) => {

    const sql = `
        SELECT *
        FROM CONTACT
        ORDER BY ID DESC
    `;

    db.all(sql, [], (err, rows) => {

        if(err){

            console.error(err.message);
            return res.status(500).json({
                success:false,
                message:"Database Error"
            });
        }

        res.json(rows);

    });

});



/*=========================================
    UPDATE  TABEL
=========================================*/

app.put("/api/message/:id", (req, res) => {

    const id = req.params.id;

    db.run(
        "UPDATE CONTACT SET STATUS='READ' WHERE ID=?",
        [id],
        function(err) {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                success: true
            });

        }
    );

});



/*=========================================
    DELETE MESSAGE
=========================================*/

app.delete("/api/message/:id", (req, res) => {
    const id = req.params.id;

    db.run(

        "DELETE FROM CONTACT WHERE ID=?",

        [id],

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
                message:"Message Deleted"
            });
        }
    );
});





