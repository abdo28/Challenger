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

let quizes = [];

function storeQuiz(){
    let quiz={
        title: document.getElementById("title").value, 
        topic: document.getElementById("topics-list").value,
        number: document.getElementById("number-of-questions").value
    };
    document.getElementById("title").value="";
    document.getElementById("topics-list").value="";
    document.getElementById("number-of-questions").value="";

    quizes.push(quiz);
    localStorage.setItem("Quizes", JSON.stringify(quizes));
}

