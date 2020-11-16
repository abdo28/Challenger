let j;
window.onload = function (){
    let topics = localStorage.getItem("Topics");
    let parsedTopics = JSON.parse(topics);

    let topicsList =  document.getElementById("topics-list");
    let toFill="";
    for(let i=0; i<parsedTopics.length;i++){
        toFill+="<option value='"+parsedTopics[i]+"'>"+parsedTopics[i]+"</option>";
    }
    
    topicsList.innerHTML=toFill;
    j=0;
}


let questions=[];

function storeQuestion(){
    let options =[];
    let corOptions=[];

    for(let h=0; h<j-1;h++){
        let hDiv = document.getElementById("q["+h+"][value]");
        if(document.getElementById("q["+h+"][del]").alt=="0"){
            options.push(hDiv.value);
        }
        if(document.getElementById("q["+h+"][corc]").alt=="1"){
            corOptions.push(hDiv.value);
        }
    }

    let question = {
        quest: document.getElementById("question").value, 
        topic: document.getElementById("topics-list").value,
        options: options,
        corOptions: corOptions
    }

    questions = localStorage.getItem("Questions") || "[]";
    questions = JSON.parse(questions);
    questions.push(question);
    localStorage.setItem("Questions", JSON.stringify(questions));
    document.getElementById("question").value = "";
    document.getElementById("topics-list").value= "";
    
    let Div = document.getElementById("options-list");
    Div.innerHTML='<div class="row3" id="q['+0+']"'+'>'+
    '<input type="text" class="col1" id="q['+0+'][value]" name="q['+0+']"'+'>'+
    '<img src="../imgs/add.png" onclick="addOption('+0+');" alt="0" id="q['+0+'][del]"class="col2"'+'>'+
    '<img src="../imgs/tick-mark (3).png" onclick="makeCor('+0+');" alt="0" id="q['+0+'][corc]"class="col3"'+'>'+
    '</div>'; 
        
    
}


function addOption(){
    j++;
    let mainDiv = document.getElementById("options-list");
    let option= '<div class="row3" id="q['+j+']"'+'>'+
    '<input type="text" class="col1" id="q['+j+'][value]" name="q['+j+']"'+'>'+
    '<img src="../imgs/del.png" onclick="delOption('+j+');" alt="0" id="q['+j+'][del]"class="col2"'+'>'+
    '<img src="../imgs/tick-mark (3).png" onclick="makeCor('+j+');" alt="0" id="q['+j+'][corc]"class="col3"'+'>'+
    '</div>';
    mainDiv.innerHTML+=option;
}

function delOption(k){
    let ele = document.getElementById("q["+k+"]");
    let img = document.getElementById("q["+k+"][del]");

    img.alt = "1";
    ele.style.display="none";

}

function makeCor(k){
    let img = document.getElementById("q["+k+"][corc]");
    img.alt="1";
    img.src="../imgs/tick-mark (4).png"
}

