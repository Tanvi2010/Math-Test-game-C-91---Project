player1_name=localStorage.getItem("player 1");
player2_name=localStorage.getItem("player 2");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+ " : ";
document.getElementById("player2_name").innerHTML=player2_name+ " : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;
 function send() {
     num1=document.getElementById("num1").value;
     num2=document.getElementById("num2").value;
     l1="<h4 id='num_display'>Q." + num1  + "X"+ num2;
     l2="<br>Answer : <input type='text' id='input_check_box'>";
     l3="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     output = l1 +l2 + l3 ;
   
     document.getElementById("output").innerHTML = output;
 }