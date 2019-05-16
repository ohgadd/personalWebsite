function select(selector) {
  return document.querySelector(selector);
}
getJoke();
function getJoke() {

  $.getJSON("https://icanhazdadjoke.com/", function(data) {
  var joke = data.joke;

  console.log(joke);
  select("#joke").innerText = '\"' + joke + '\" - some dad.';
})};
