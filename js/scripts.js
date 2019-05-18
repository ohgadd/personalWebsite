function select(selector) {
  return document.querySelector(selector);
}
function getJoke() {

  $.getJSON("https://icanhazdadjoke.com/", function(data) {
  var joke = data.joke;

  console.log(joke);
  select("#joke").innerText = '\"' + joke + '\" - some dad.';
})};

function htmlMove() {
  var elem = document.getElementById("htmlJS");
  var width = 0;
  var id = setInterval(frame, 15);
  function frame() {
    if (width >=100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}

function cssMove() {
  var elem = document.getElementById("cssJS");
  var width = 0;
  var id = setInterval(frame, 15);
  function frame() {
    if (width >=100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}

function photoshopMove() {
  var elem = document.getElementById("photoshopJS");
  var width = 0;
  var id = setInterval(frame, 15);
  function frame() {
    if (width >=80) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}

function javascriptMove() {
  var elem = document.getElementById("javascriptJS");
  var width = 0;
  var id = setInterval(frame, 15);
  function frame() {
    if (width >=60) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}

function googlinessMove() {
  var elem = document.getElementById("googlinessJS");
  var width = 0;
  var id = setInterval(frame, 15);
  function frame() {
    if (width >=100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}

function teaMove() {
  var elem = document.getElementById("teaJS");
  var width = 0;
  var id = setInterval(frame, 15);
  function frame() {
    if (width >=100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}

function growObject() {
  animation();
}

function animation(){
  $(".skillBar").hover(function () {
    $(this).animate(
      {
        height: '300px',
      });
  }, function () {

    $(this).animate(
      {
        height: '50px',
      });
  });
}

//if height is 300px, add descrp
// function htmlDescription() {
//   if($(".skillBar"))
// }
var myVar;

function pageLoaded(){
  htmlMove();
  cssMove();
  photoshopMove();
  javascriptMove();
  googlinessMove();
  teaMove();
  getJoke();
}

document.addEventListener('DOMContentLoaded', function () {
    pageLoaded();
    $('.portfolioCarousel').slick({
      adaptiveHeight: true,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
});

// $(document).ready(function(){
//
// });
