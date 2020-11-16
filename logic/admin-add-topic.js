let topics=[]
function storeTopic(){
    topics.push(document.getElementById("title").value);
    localStorage.setItem("Topics", JSON.stringify(topics));
    document.getElementById("title").value="";
}