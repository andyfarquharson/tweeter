$(document).ready(function() {
  console.log("Hello TWEETER!")
  
  

$( "#tweet-text" ).on('input', function() {
  let count = $(this).val().length;
  let char = 140 - count;

  let counter = $(this).parent('div').next('div').children('.counter');
  counter.text(char);

  if (char < 0) {
    counter.css('color', 'red');
    } else {
      counter.css('color', 'black');
    }
  



  }); 
  







  $( "#tweet.text" ).click(function() {
    console.log("You're in the textzone!")
    $( ".tweet-submit" ).keypress();
  });
  
  
});

