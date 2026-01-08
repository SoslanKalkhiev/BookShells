const defaultcollections = JSON.parse(localStorage.getItem("defaultcollections"));

let readbtn = document.getElementById("read");
let readingbtn = document.getElementById("reading");
let wannareadbtn = document.getElementById("wannaread");
let recentbtn = document.getElementById("recent");

let readcnt = document.getElementById("read-cnt");
let readingcnt = document.getElementById("reading-cnt");
let wannareadcnt = document.getElementById("wanna-read-cnt");
let recentcnt = document.getElementById("recent-cnt");

defaultcollections.forEach(defcollect => {
    if(defcollect.name === "read"){
        readcnt.textContent = defcollect.cnt;
    };
    if(defcollect.name === "reading"){
        readingcnt.textContent = defcollect.cnt;
    };
    if(defcollect.name === "wannaread"){
        wannareadcnt.textContent = defcollect.cnt;
    };
    if(defcollect.name === "recent"){
        recentcnt.textContent = defcollect.cnt;
    };
});


// let collections = document.getElementById("collections");