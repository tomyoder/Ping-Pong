//BACKEND



var output = [];

var pingPong = function(userInput) {

  for (var i=0; i<=userInput; i++) {
    output.push(i);
}

 if (userInput % 3 === 0 && userInput % 15 !== 0){
   var byThree = "Ping!";
 }
 //alert(byThree);

    if (userInput % 5 === 0 && userInput % 15 !== 0){
      var byFive = "Pong!";
    }
 //alert(byFive);

      if (userInput % 15 === 0){
       var byFifteen = "Ping Pong!!";
      }
      //alert(byFifteen);

var outputStr = output.toString();
//console.log(outputStr);
var pingArray = output.map(function(number) {


});
      console.log(pingArray);

});

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
