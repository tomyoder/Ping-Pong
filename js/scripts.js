//BACKEND



var output = [];

var pingPong = function(userInput) {

for (var i=1; i<=userInput; i++) {

  if (userInput % 15 === 0){
     output.push("Ping Pong!!");
  }
  else if (userInput % 5 === 0){
     output.push("Pong!");
  }
  else if (userInput % 3 === 0){
     output.push("Ping!");
  }
  else {
      output.push(i);
  }
  };
  return (output);
  console.log(output);
  
};


//FRONTEND
$(document).ready(function(){
  $("form#pingPong").submit(function(event){
    event.preventDefault();
    var userInput =parseInt($("#userInput").val());
    //var result = pingPong(userInput);


    });
  });
