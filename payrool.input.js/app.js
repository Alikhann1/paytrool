var thead = document.getElementById("thead");
var td = document.getElementsByClassName("td");


var salaryy = document.getElementById("salary");
var dayss = document.getElementById("days");

function employeename(){ 
    var serialnumber = document.getElementById("number").value;
    var namee = document.getElementById("name").value;
    var salary = document.getElementById("salary").value;
    var days = document.getElementById("days").value;
    var pardaysalary = (salary/30).toFixed();
    var totalsalary = (pardaysalary *days).toFixed();

var tbody = document.getElementById("tbody");

var tr = document.createElement("tr");
tbody.appendChild(tr);
tr.setAttribute("class","tr")


var td = document.createElement("td");
var tdtext =document.createTextNode(serialnumber);
td.appendChild(tdtext);
td.setAttribute("class","tr")
tr.appendChild(td);



var td = document.createElement("td");
var tdtext =document.createTextNode(namee);
td.appendChild(tdtext);
td.setAttribute("class","tr")
tr.appendChild(td);

var td = document.createElement("td");
var tdtext =document.createTextNode(salary);
td.appendChild(tdtext);
td.setAttribute("class","tr")
tr.appendChild(td);

var td = document.createElement("td");
var tdtext =document.createTextNode(days);
td.appendChild(tdtext);
td.setAttribute("class","tr")
tr.appendChild(td);

var td = document.createElement("td");
var tdtext =document.createTextNode(pardaysalary);
td.appendChild(tdtext);
td.setAttribute("class","tr")
tr.appendChild(td);

var td = document.createElement("td");
var tdtext =document.createTextNode(totalsalary);
td.appendChild(tdtext);
td.setAttribute("class","tr")
tr.appendChild(td);

var button = document.createElement("button");
var buttontext =document.createTextNode("Edit  Row");
button.appendChild(buttontext);
tr.appendChild(button);
button.setAttribute("onclick","edit(this)");
button.setAttribute("class","e");

var button = document.createElement("button");
var buttontext =document.createTextNode("insert Text");
button.appendChild(buttontext);
tr.appendChild(button);
button.setAttribute('class','insert');
button.setAttribute("id","insert");
button.setAttribute("onclick","insert(this)")

var button = document.createElement("button");
var buttontext =document.createTextNode("Delet  Row");
button.appendChild(buttontext);
tr.appendChild(button);
button.setAttribute("onclick","delet(this)");
button.setAttribute('id','delet');
button.setAttribute('class','dt');


var button = document.createElement("button");
var buttontext =document.createTextNode("Conform C");
button.appendChild(buttontext);
tr.appendChild(button);
button.setAttribute('class','conform');
button.setAttribute("onclick","conform(this)");

var button = document.createElement("button");
var buttontext =document.createTextNode("Cancle C");
button.appendChild(buttontext);
tr.appendChild(button);
button.setAttribute('class','cancle');
button.setAttribute("onclick","cancle(this)");

document.getElementById('number').value='';
document.getElementById('name').value='';
document.getElementById('salary').value='';
document.getElementById('days').value='';

}

function theadd(){
    thead.classList.remove("thead");
     
}

function deletall(btn){
    btn.setAttribute("class","deletalll");
    btn.previousSibling.previousSibling.classList.add("insertt");
    btn.nextSibling.nextSibling.classList.remove("conformm");
    btn.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove("canclee");
}

function conformm(btn){

    btn.nextSibling.nextSibling.classList.remove("canclee");
    btn.nextSibling.nextSibling.classList.add("three");
    btn.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove("conformm");
    btn.nextSibling.nextSibling.nextSibling.nextSibling.classList.add("four");
    
}

function conformall(btn){
    var thead = document.getElementById('thead');
    var tbody = document.getElementById('tbody');
    tbody.innerHTML = "";
    thead.classList.add("thead");
    console.log(btn.previousSibling.nextSibling.nextSibling.nextSibling.getAttribute("class"))
    btn.classList.add("conformm");
    btn.nextSibling.nextSibling.classList.add("canclee")
    btn.previousSibling.previousSibling.classList.remove("deletalll")
    btn.previousSibling.previousSibling.previousSibling.previousSibling.classList.remove("insertt")
}

function canclee(btn){
    btn.classList.add("conformm");
    btn.previousSibling.previousSibling.classList.add("canclee");
    btn.previousSibling.previousSibling.previousSibling.previousSibling.classList.remove("deletalll");
    btn.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.classList.remove("insertt");
}

function delet(btn){
    btn.setAttribute("class","deletall");
    btn.previousSibling.previousSibling.classList.add("edittt")
    btn.nextSibling.classList.remove("conform")
    btn.nextSibling.classList.add("conf")
    btn.nextSibling.classList.add("con")
    btn.nextSibling.nextSibling.classList.remove("cancle")
   
}

function conform(btn){
    btn.parentNode.remove();
    
}

function cancle(btn){
    btn.classList.add('cancle')
    btn.previousSibling.classList.add('conform');
    btn.previousSibling.previousSibling.classList.remove("deletall");
    btn.previousSibling.previousSibling.classList.add("dall");
    btn.previousSibling.previousSibling.previousSibling.previousSibling.classList.remove("edittt");
    
}

function edit(btn){
    btn.setAttribute('class','edit')
    btn.nextSibling.nextSibling.setAttribute("class",'delet');
    btn.nextSibling.classList.remove("insert");
    btn.nextSibling.classList.add("ins");

    var serialnumber = document.getElementById("number");
        var namee = document.getElementById("name");
        var salaryy = document.getElementById("salary");
        var dayss = document.getElementById("days");
        var pardaysalary = (salary/30).toFixed();
        var totalsalary = (pardaysalary *days).toFixed();

            serialnumber.value = btn.parentNode.firstChild.innerHTML;
    namee.value = btn.parentNode.firstChild.nextSibling.innerHTML;
   salaryy.value = btn.parentNode.firstChild.nextSibling.nextSibling.innerHTML;
    dayss.value = btn.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerHTML;
}

function insert(btn){
    btn.classList.add("insert");
    btn.nextSibling.classList.remove("delet");
    btn.nextSibling.classList.add("dalll");
    btn.previousSibling.classList.remove("edit");
    btn.previousSibling.classList.add("edi");

    var serialnumber = document.getElementById("number").value;
    var namee = document.getElementById("name").value;
    var salaryy = document.getElementById("salary").value;
    var dayss = document.getElementById("days").value;
    var perdaysalary = (salaryy/30).toFixed();
    var totalsalary = (perdaysalary * dayss).toFixed();

        btn.parentNode.firstChild.innerHTML= serialnumber;
        btn.parentNode.firstChild.nextSibling.innerHTML= namee;
        btn.parentNode.firstChild.nextSibling.nextSibling.innerHTML= salaryy;
        btn.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerHTML= dayss;
        btn.parentNode.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML=perdaysalary
        btn.parentNode.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML=totalsalary;
    

        document.getElementById('number').value='';
    document.getElementById('name').value='';
    document.getElementById('salary').value='';
    document.getElementById('days').value='';
        
        
}



