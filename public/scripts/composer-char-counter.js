$(document).ready(function() {

  $("#tweet-text").on('input', function() {
  let count = $(this).val().length;
  let char = 140 - count;
  // character counter for the text box
    let counter = $(this).parent('div').next('div').children('.counter');
    console.log(counter.val() - count);
    counter.text(char);
    
    console.log((140 - count));
    if (char < 0) {
      counter.css('color', 'red');
    } else {
      counter.css('color', 'black');
    }
  });
  // Registers the submit button
  $("#tweet.text").click(function() {
    $(".tweet-submit").keypress();
  });
});

