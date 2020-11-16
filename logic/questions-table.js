window.onload = function (){
    let questions= localStorage.getItem("Questions");
    questions = JSON.parse(questions);
    let mainDiv = document.getElementById("main");
    let fillIn = "<table> <tr><th>Quest</th><th>Topic</th><th>Options</th><th>Correct Options</th></tr>";
    
    for(let i=0; i<questions.length; i++){
        fillIn+="<tr><td>"+ questions[i].quest+"</td><td>"+questions[i].topic+"</td><td>";
        console.log(questions[i].options);
        fillIn+=questions[i].options;
        fillIn+="</td><td>";
        fillIn+=questions[i].corOptions;
        fillIn+="</td></tr>";
        console.log(fillIn);
    }

    fillIn+="</table>";
    console.log(fillIn);
    mainDiv.innerHTML=fillIn;
}