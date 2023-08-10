console.log("hello");
document.getElementById("apiCallButton").addEventListener("click",async()=>{
    let api = document.getElementById("apiText").value;
    document.location.href=api;
})