window.onload = function (){
    let topics = localStorage.getItem("Topics");
    let parsedTopics = JSON.parse(topics);

    let topicsList =  document.getElementById("topics-list");
    let toFill="";
    for(let i=0; i<parsedTopics.length;i++){
        toFill+="<option value='"+parsedTopics[i]+"'>"+parsedTopics[i]+"</option>";
    }

    topicsList.innerHTML=toFill;
}


let questions=[];

function storeQuestion(){
    
}