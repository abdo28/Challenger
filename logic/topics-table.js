window.onload = function (){
    let Topics= localStorage.getItem("Topics");
    Topics= JSON.parse(Topics);
    let mainDiv = document.getElementById("main");
    let fillIn = "<table> <tr><th>topic</th></tr>";
    
    for(let i=0; i<Topics.length; i++){
        fillIn+="<tr><td>"+ Topics[i]+"</td></tr>";
        
    }

    fillIn+="</table>";
    console.log(fillIn);
    mainDiv.innerHTML=fillIn;
}