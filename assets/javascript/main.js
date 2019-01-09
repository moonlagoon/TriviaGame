var notAnswered = 0;
var correctAnswer = 0;
var wrongAnswer = 0;

var timer = 80;  

$(document).ready(function() {
    

$("#container2").hide();
$("#container3").hide();

$("#start").on("click", function() {

$("#container1").hide(); 
$("#container2").show();
        
        startCountdown();
        return;
    });
    
    function countdown(){
        timer--;
        $("#time").html("Time Remaining: " + timer + " Seconds");
        $("#submit").on("click" , function() {
        timer = 0;
        return;
                                       
        });
                   
        if(timer == -1){
            timeUp();
            $("#container2").hide();
        }
    }
                      
    function startCountdown () {
        setInterval(countdown, 1000);
    }
    function timeUp(){
//-----------------------questions-------------------------------
        var q1 = $('input:radio[name="q1"]:checked').val();
		var q2 = $('input:radio[name="q2"]:checked').val();
		var q3 = $('input:radio[name="q3"]:checked').val();
		var q4 = $('input:radio[name="q4"]:checked').val();
		var q5 = $('input:radio[name="q5"]:checked').val();
		var q6 = $('input:radio[name="q6"]:checked').val();
		
        if(q1 == " C "){
            
            correctAnswer++;
         
        }
        else if(q1 == undefined){
            notAnswered++;
        }
        else {
            wrongAnswer++;
        }
        //---------------------------------
        if(q2 == " A "){
            
            correctAnswer++;
         
        }
        else if(q2 == undefined){
            notAnswered++;
        }
        else{
            wrongAnswer++;
        }
        //---------------------------------
        if(q3 == " E minor "){
            
            correctAnswer++;
         
        }
        else if(q3 == undefined){
            notAnswered++;
        }
        else{
            wrongAnswer++;
        }
        //-----------------------------------
        if(q4 == " A minor "){
            
            correctAnswer++;
         
        }else if(q4 == undefined){
            notAnswered++;
        }else{
            wrongAnswer++;
        }
        //--------------------------------------
        if(q5 == " D "){
            
            correctAnswer++;
         
        }else if(q5 == undefined){
            notAnswered++;
        }else{
            wrongAnswer++;
        }
        //-----------------------------------------
        if(q6 == " G "){
            
            correctAnswer++;
         
        }else if(q6 == undefined){
            notAnswered++;
        }else{
            wrongAnswer++;
        }
        //-------------------------------
        $("#correctAnswer").html("Correct: " + correctAnswer);
        $("#WrongAnswer").html("Wrong: " + wrongAnswer);
        $("#notAnswered").html("Not Answered : " + notAnswered);
    
        $("#container3").show();
        
    }

    $("#try-again").on("click", function() {
        location.reload();
           
      });
    
});

