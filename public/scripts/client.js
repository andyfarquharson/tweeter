/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Evade function for safe user input
const evade = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// This function lays out our tweets
const createTweetElement = data => {
  let $tweet = (`
  <article class="tweet">
    <header>
      <div class='user'>
        <img src="${evade(data.user.avatars)}">
        <p>${evade(data.user.name)}</p>    
      </div>
      <div id='handle'>${evade(data.user.handle)}</div>
    </header>
    <p id='tweet'>${evade(data.content.text)}</p>
    <footer>
      <div>${evade(timeago.format(data.created_at))}</div>
      <ul>
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </ul>
    </footer>
  </article>
  `);
  return $tweet;
};

// Grabs tweets from /tweets
const renderTweets = data => {
  $('#tweet-container').empty();
  for (let tweet of data) {
    $('#tweet-container').prepend(createTweetElement(tweet));
  }
};

// Loads the tweets on the page
const loadTweets = () => {
  $.ajax('/tweets', {
    method: 'GET'
  })
    .then((tweets) => {
      renderTweets(tweets);
    });
};

// Posts the tweet with the submit button
const submitTweet = function(event) {
  event.preventDefault();
  $('.error-alert').text('').slideUp();
  
  if (!$('textarea').val()) {
    return $('.error-alert').text("Uh Oh: You gotta be humming about something!").slideDown();
  }
  if ($('textarea').val().length > 140) {
    return $('.error-alert').text("Uh Oh: Looks like someones a bit of a humming bird!").slideDown();
  }

  $.ajax('/tweets', {
    method: 'POST',
    data: $('textarea').serialize(),
  })
    .then(() => {
      loadTweets();
    });
    $('textarea').val('');
    $('.counter').text(140);
};

// Loads initial tweets
loadTweets();

$(document).ready(function() {
  console.log("Hello TWEETER!");
  
  $('form.tweet-submit').on('submit', submitTweet);
});