
// // objects are written in curly brackets and we use : insted of =

// // var person={
// //     name: "Hira",
// //     age: 20,
// //     qualification: "Undergraduate",
// //     hobbies:["Cooking","singing", "dancing"],
// //     calculate: function(a,b){
// //         console.log(a+b)

// //     },
// //     sub: function(x,y){
// //         console.log(y-x)
// //     }

// // };
// // person.sub(10,20)
// // person.name="Abuzar"

// // person.calculate(10,20)
// // delete person.qualification
// // person.lastName= "Mushtaq"
// // console.log(person)
// // console.log(person.name)
// // console.log(person.hobbies[1])
// // console.log(person.age)

// // var input= document.getElementById("input")
// // console.log(input)

// // function add(){
// //     var input=document.getElementById("input");
// //     input=input.value
// //     for(i=0; i<students.length;i++){
// //    if(students.rollNo==true)

// //     console.log(students.status[i])
// // }
// // }



// // chek: function(rollNo){



// // for(i=0; i<students.length;i++){
// //    if(students.rollNo==true)

// //     console.log(students.status[i])
// // }
// // }
// // }
// // console.log(2)
// var students=[
//     {rollNo:1,name:"Hira", section:"A", marks:89, status:"Pass"},
//     {rollNo:2,name:"Abuzar", section:"A", marks:99, status:"Pass"},
//     {rollNo:3, name:"Usama", section:"A", marks:80, status:"Pass"},
//     {rollNo:4,name:"Aneesa", section:"A", marks:49, status:"Fail"},
//     {rollNo:5, name:"Huma", section:"A", marks:19, status:"Fail"}];

// var nam= document.getElementById("nam")
// var rollNum= document.getElementById("rollNum")
// var sec=document.getElementById("sec")
// var score=document.getElementById("score")
// var sts=document.getElementById("sts")



// function chkResult(){
//     var inp=document.getElementById("rollNo").value
//     for(i=0;i<students.length;i++){
//         if(students[i].rollNo==inp){
//             var obj=students[i];

// rollNum.innerHtml=obj.rollNo;
// nam.innerHtml=obj.name;
// sec.innerHTML=obj.section;
// score.innerHTML=obj.marks;
// sts.innerHTML=obj.status;
// console.log(students[i])
//             // console.log(students[i])
//         }
//     }


// }









var dispmin =document.getElementById('min')
var dispsec =document.getElementById('sec')
var dispmil =document.getElementById('mil')

var sec=0;
var min=0;
var mil=0;


function init(){
    dispmin.innerHTML=min;
    dispsec.innerHTML=sec;
    dispmil.innerHTMLmil;
}
init();

var interval;

function timer(){
    console.log(0)
    mil=mil+1
    if(mil==10){
        mil=0
        sec=sec+1
        if(sec==60){
            sec=0;
            min=min+1
        }
       
    }
init()
}
function startTimer(){
interval=setInterval(timer,100) } //sec ko mli sec m show krwna h
// setTimeout()

function stopTimer(){
    clearInterval(interval)
}


function resetTimer(){
    stopTimer()
    min=0;
    sec=0;
    mil=0;
}










