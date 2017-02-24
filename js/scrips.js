function pingPong (input) {







}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("anyNumber").val();
    userInput = userInput.split(" ");
    pingPong(userInput);

  });
});
