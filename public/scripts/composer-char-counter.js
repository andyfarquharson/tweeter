$(document).ready(function() {

  let count = $(this).val().length;
  let char = 140 - count;
  // character counter for the text box
  $("#tweet-text").on('input', function() {
    let counter = $(this).parent('div').next('div').children('.counter');
    counter.text(char);

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

