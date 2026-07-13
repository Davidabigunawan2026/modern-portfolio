/*==================================================
DATABASE
==================================================*/

const DB_NAME = "SkillDB";
const DB_VERSION = 1;
const STORE_NAME = "HTML";


let db = null;


// --------------- MEMBUKA DATABASE -------------------------
function openDatabase(){
    return new Promise((resolve,reject)=>{
        const request = indexedDB.open(DB_NAME,DB_VERSION);
        request.onerror = ()=>{
            reject(request.error);
        };

        request.onsuccess = ()=>{
            db = request.result;
            console.log("Database berhasil dibuka.");
            resolve(db);
        };

        request.onupgradeneeded = (event)=>{
            db = event.target.result;
            if(!db.objectStoreNames.contains(STORE_NAME)){
                db.createObjectStore(
                    STORE_NAME,
                    {
                        keyPath:"id",
                        autoIncrement:true
                    }
                );
            }
        };
    });

}


// ------------------------ MENAMBAH  RECORD -----------------------
function addHTMLTag(tagHTML){
    return new Promise((resolve,reject)=>{
        const tx = db.transaction(STORE_NAME,"readwrite");
        const store = tx.objectStore(STORE_NAME);
        const request = store.add({
            tagHTML:tagHTML
        });

        request.onsuccess=()=>resolve();
        request.onerror=()=>reject(request.error);

    });

}



// ------------------- ISI  RECORDS -------------------
const htmlTags=[

"<html>",
"<head>",
"<body>",
"<header>",
"<main>",
"<section>",
"<article>",
"<aside>",
"<footer>",
"<nav>",
"<div>",
'<div class="">',
'<div id="">',
"<span>",
"<button>",
"<form>",
"<input>",
"<textarea>",
"<canvas>",
"<img>",
"<a>"

];



async function seedHTMLTags(){
    for(const tag of htmlTags){
        await addHTMLTag(tag);
    }
}



function getAllHTMLTags(){

    return new Promise((resolve,reject)=>{
        const tx = db.transaction(STORE_NAME,"readonly");
        const store = tx.objectStore(STORE_NAME);
        const request = store.getAll();
        request.onsuccess=()=>{
            resolve(request.result);
        };

        request.onerror=()=>{
            reject(request.error);
        };
    });

}



/*==================================================
CEK DATABASE KOSONG
==================================================*/

function isDatabaseEmpty(){

    return new Promise((resolve,reject)=>{
        const tx = db.transaction(STORE_NAME,"readonly");
        const store = tx.objectStore(STORE_NAME);
        const request = store.count();
        request.onsuccess = ()=>{
            resolve(request.result === 0);
        };

        request.onerror = ()=>{
            reject(request.error);

        };
    });
}


/*==================================================
INIT DATABASE
==================================================*/

async function initDatabase(){
    await openDatabase();
    const empty = await isDatabaseEmpty();

    if(empty){
        console.log("Database kosong.");
        await seedHTMLTags();
        console.log("Data HTML berhasil diisi.");
    }
    else{

        console.log("Database sudah berisi data.");

    }

}


