window.onload = function (){
    let Quizes= localStorage.getItem("Quizes");
    Quizes= JSON.parse(Quizes);
    let mainDiv = document.getElementById("main");
    let fillIn = "<table> <tr><th>title</th><th>Topic</th><th># of Quests</th></tr>";
    
    for(let i=0; i<Quizes.length; i++){
        fillIn+="<tr><td>"+ Quizes[i].title+"</td><td>"+Quizes[i].topic+"</td><td>";
        fillIn+=Quizes[i].number;
        fillIn+="</td></tr>";
        
    }

    fillIn+="</table>";
    console.log(fillIn);
    mainDiv.innerHTML=fillIn;
}