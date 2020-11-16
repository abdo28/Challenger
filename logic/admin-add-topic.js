let topics=[]
function storeTopic(){
    topics = localStorage.getItem("Topics") || "[]";
    topics = JSON.parse(topics);
    topics.push(document.getElementById("title").value);
    localStorage.setItem("Topics", JSON.stringify(topics));
    document.getElementById("title").value="";
}