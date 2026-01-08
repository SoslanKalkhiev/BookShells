const defaultcollections = JSON.parse(localStorage.getItem("defaultcollections"));
let read1 =[];
let reading2=[];
let wannaread3=[];
let recent4=[];

defaultcollections.forEach(defcollect=>{
    if(defcollect.name==="read")read1 = defcollect;
    else
    {
        if(defcollect.name==="reading") reading2 = defcollect;
        else
        {
            if(defcollect.name ==="wannaread") wannaread3=defcollect;
            else recent4 = defcollect;
        }
    }
})

let readbtn = document.getElementById("read");
let readingbtn = document.getElementById("reading");
let wannareadbtn = document.getElementById("wanna-read");
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

readbtn.addEventListener("click",()=>{
    localStorage.setItem("chosecollection", JSON.stringify(read1));
    window.location.href = `collection.html?id=${1}`;
});
readingbtn.addEventListener("click",()=>{
    localStorage.setItem("chosecollection", JSON.stringify(reading2));
    window.location.href = `collection.html?id=${2}`;
});
wannareadbtn.addEventListener("click",()=>{
    localStorage.setItem("chosecollection", JSON.stringify(wannaread3));
    window.location.href = `collection.html?id=${3}`;
});
recentbtn.addEventListener("click",()=>{
    localStorage.setItem("chosecollection", JSON.stringify(recent4));
    window.location.href = `collection.html?id=${4}`;
});
// let collections = document.getElementById("collections");