/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const createTweetElement = data => {
  let $tweet = (`<article class="tweet">
  <header>
  <div>${data.user.name}</div>
  <div>${data.user.avatars}</div>
  <div>${data.user.handle}</div>
  </header>
  <p>${data.content.text}</p>
  <footer>
  <div>${data.created_at}</div>
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

const renderTweets = data => {
  for (let tweet of data) {
    $('#tweet-container').append(createTweetElement(tweet));
  }
  return;
};

// console.log(renderTweets(tweetData));
const loadTweets = () => {
  $.ajax('/tweets', {
    method: 'GET'
  })
    .then((tweets) => {
      renderTweets(tweets);
    });
};

loadTweets();
console.log(loadTweets());
//
const submitTweet = event => {
  console.log("Hello from the submit form!");
  event.preventDefault();
  
  $.ajax('/tweets', {
    method: 'POST',
    data: $(this).serialize()
  });
  
};

$(document).ready(function() {
  console.log("Hello TWEETER!")
  
  // const $tweet = createTweetElement(tweetData);
  // console.log($tweet);
  // $('#tweet-container').append($tweet);
  // (renderTweets(tweetData));
});