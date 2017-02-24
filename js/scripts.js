//BACKEND



var output = [];
var pingPong = function(userInput) {

  for (var i=0; i<=userInput; i++) {
    output.push(i);
}














};









//FRONTEND
$(document).ready(function(){
  $("form#pingPong").submit(function(event){
    event.preventDefault();
    var userInput =parseInt($("#userInput").val());
    var result = pingPong(userInput);

    $("#result").text(result);

    });
  });
