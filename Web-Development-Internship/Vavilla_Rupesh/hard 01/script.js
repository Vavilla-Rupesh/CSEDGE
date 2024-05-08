var flag=1;
function check1(){
    if(flag==1){
        document.getElementById("r1c1").innerHTML="X";
        document.getElementById("r1c1").style.color="red";
        flag=0;
    }
    else{
        document.getElementById("r1c1").innerHTML="O";
        document.getElementById("r1c1").style.color="blue";
        flag=1;
    }
    document.getElementById("r1c1").removeAttribute("onclick");
}
function check2(){
    if(flag==1){
        document.getElementById("r1c2").innerHTML="X";
        document.getElementById("r1c2").style.color="red";
        flag=0;
    }
    else{
        document.getElementById("r1c2").innerHTML="O";
        document.getElementById("r1c2").style.color="blue";
        flag=1;
    }
    document.getElementById("r1c2").removeAttribute("onclick");
}
function check3(){
    if(flag==1){
        document.getElementById("r1c3").innerHTML="X";
        document.getElementById("r1c3").style.color="red";
        flag=0;
    }
    else{
        document.getElementById("r1c3").innerHTML="O";
        document.getElementById("r1c3").style.color="blue";
        flag=1;
    }
    document.getElementById("r1c3").removeAttribute("onclick");
}
function check4(){
    if(flag==1){
        document.getElementById("r2c1").innerHTML="X";
        document.getElementById("r2c1").style.color="red";
        flag=0;
    }
    else{
        document.getElementById("r2c1").innerHTML="O";
        document.getElementById("r2c1").style.color="blue";
        flag=1;
    }
    document.getElementById("r2c1").removeAttribute("onclick");
}
function check5(){
    if(flag==1){
        document.getElementById("r2c2").innerHTML="X";
        document.getElementById("r2c2").style.color="red";
        flag=0;
    }
    else{
        document.getElementById("r2c2").innerHTML="O";
        document.getElementById("r2c2").style.color="blue";
        flag=1;
    }
    document.getElementById("r2c2").removeAttribute("onclick");
}
function check6(){
    if(flag==1){
        document.getElementById("r2c3").innerHTML="X";
        document.getElementById("r2c3").style.color="red";
        flag=0;
    }
    else{
        document.getElementById("r2c3").innerHTML="O";
        document.getElementById("r2c3").style.color="blue";
        flag=1;
    }
    document.getElementById("r2c3").removeAttribute("onclick");
}
function check7(){
    if(flag==1){
        document.getElementById("r3c1").innerHTML="X";
        document.getElementById("r3c1").style.color="red";
        flag=0;
    }
    else{
        document.getElementById("r3c1").innerHTML="O";
        document.getElementById("r3c1").style.color="blue";
        flag=1;
    }
    document.getElementById("r3c1").removeAttribute("onclick");
}
function check8(){
    if(flag==1){
        document.getElementById("r3c2").innerHTML="X";
        document.getElementById("r3c2").style.color="red";
        flag=0;
    }
    else{
        document.getElementById("r3c2").innerHTML="O";
        document.getElementById("r3c2").style.color="blue";
        flag=1;
    }
    document.getElementById("r3c2").removeAttribute("onclick");
}
function check9(){
    if(flag==1){
        document.getElementById("r3c3").innerHTML="X";
        document.getElementById("r3c3").style.color="red";
        flag=0;
    }
    else{
        document.getElementById("r3c3").innerHTML="O";
        document.getElementById("r3c3").style.color="blue";
        flag=1;
    }
    document.getElementById("r3c3").removeAttribute("onclick");
}
function check(){
    var b1=document.getElementById("r1c1").innerHTML;
    var b2=document.getElementById("r1c2").innerHTML;
    var b3=document.getElementById("r1c3").innerHTML;
    var b4=document.getElementById("r2c1").innerHTML;
    var b5=document.getElementById("r2c2").innerHTML;
    var b6=document.getElementById("r2c3").innerHTML;
    var b7=document.getElementById("r3c1").innerHTML;
    var b8=document.getElementById("r3c2").innerHTML;
    var b9=document.getElementById("r3c3").innerHTML;
    if((b1=="X"&&b2=="X"&&b3=="X")||(b1=="X"&&b4=="X"&&b7=="X")||(b1=="X"&&b5=="X"&&b9=="X")||(b2=="X"&&b5=="X"&&b8=="X")||(b3=="X"&&b6=="X"&&b9=="X")||(b3=="X"&&b5=="X"&&b7=="X")||(b4=="X"&&b5=="X"&&b6=="X")||(b7=="X"&&b8=="X"&&b9=="X")){
        document.getElementById("result").innerHTML="Player 1 wins";
    }
    else if((b1=="O"&&b2=="O"&&b3=="O")||(b1=="O"&&b4=="O"&&b7=="O")||(b1=="O"&&b5=="O"&&b9=="O")||(b2=="O"&&b5=="O"&&b8=="O")||(b3=="O"&&b6=="O"&&b9=="O")||(b3=="O"&&b5=="O"&&b7=="O")||(b4=="O"&&b5=="O"&&b6=="O")||(b7=="O"&&b8=="O"&&b9=="O")){
        document.getElementById("result").innerHTML="Player 2 wins";
    }
    else if(b1!=""&&b2!=""&&b3!=""&&b4!=""&&b5!=""&&b6!=""&&b7!=""&&b8!=""&&b9!=""){
        document.getElementById("result").innerHTML="Draw";
    }
}
function reset(){ 
    location.reload(); 
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
}