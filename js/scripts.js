//BACKEND
var pingPong = function(userInput) {
var output = [];

for (var i=1; i<=userInput; i++) {

  if (i % 15 === 0){
     output.push("Ping Pong!!");
  }
  else if (i % 5 === 0){
     output.push("Pong!");
  }
  else if (i % 3 === 0){
     output.push("Ping!");
  }
  else {
      output.push(i);
  }
  };
  console.log(output);       //return (output);
};

//FRONTEND
$(document).ready(function(){
  $("form#pingPong").submit(function(event){
    event.preventDefault();
    var userInput =parseInt($("#userInput").val());
    var result = pingPong(userInput);


    });
  });
