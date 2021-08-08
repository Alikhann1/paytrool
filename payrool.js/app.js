var tbody = document.getElementById("tbody");

var NumberOfEmploy = parseInt(prompt('enter the number of employ'));


for(var i=0; i<NumberOfEmploy; i++){

var EmployeeName = (prompt('enter the name of employ' + " " +(i+1)));
var NumberOfDaysPresent = parseInt(prompt('enter the days employ avaliable' + " " +(i+1)));
var EmployeeSalary = parseInt(prompt('enter the salary of employ' + " " +(i+1)));

var employobject ={
    name : EmployeeName,
    salary : EmployeeSalary ,
    day : NumberOfDaysPresent,

    perDaySalary :function(){
        return this.salary/30;

    },

    totalSalary : function() {
        return this.perDaySalary()*this.day
    }     
}

tbody.innerHTML += 
'<tr style="border: 2px;">'+
'<td >' + (i+1) + '</td>' +
'<td>'+ employobject.name + '</td>' +
'<td>'+ employobject.salary + '</td>' +
'<td>'+ employobject.day + '</td>' +
'<td>'+ employobject.perDaySalary() + '</td>' +
'<td>'+ employobject.totalSalary() + '</td>' +
'</tr>'
}
