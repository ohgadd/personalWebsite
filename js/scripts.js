function select(selector) {
  return document.querySelector(selector);
}

function getJoke() {
  $.getJSON("https://icanhazdadjoke.com/", function(data) {
    var joke = data.joke;

    console.log(joke);
    select("#joke").innerText = '"' + joke + '" - some dad.';
  });
}

function htmlMove() {
  var elem = document.getElementById("htmlJS");
  var width = 0;
  var id = setInterval(frame, 15);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      if (width <100){elem.innerHTML = width * 1 + "%";}else{elem.innerHTML = "Skilled"};
    }
  }
}

function cssMove() {
  var elem = document.getElementById("cssJS");
  var width = 0;
  var id = setInterval(frame, 15);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      if (width <100){elem.innerHTML = width * 1 + "%";}else{elem.innerHTML = "Confident"};
    }
  }
}

function photoshopMove() {
  var elem = document.getElementById("photoshopJS");
  var width = 0;
  var id = setInterval(frame, 15);
  function frame() {
    if (width >= 80) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      if (width <80){elem.innerHTML = width * 1 + "%";}else{elem.innerHTML = "Experienced"};
    }
  }
}

function javascriptMove() {
  var elem = document.getElementById("javascriptJS");
  var width = 0;
  var id = setInterval(frame, 15);
  function frame() {
    if (width >= 60) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      if (width <60){elem.innerHTML = width * 1 + "%";}else{elem.innerHTML = "Still Learning"};
    }
  }
}

function googlinessMove() {
  var elem = document.getElementById("googlinessJS");
  var width = 0;
  var id = setInterval(frame, 15);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      if (width <100){elem.innerHTML = width * 1 + "%";}else{elem.innerHTML = "<span id='unofficial' class='align-center'><em>Unofficially</em></span>   Professional Googler"};
    }
  }
}

function teaMove() {
  var elem = document.getElementById("teaJS");
  var width = 0;
  var id = setInterval(frame, 15);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      if (width <100){elem.innerHTML = width * 1 + "%";}else{elem.innerHTML = "Brew Master"};
    }

  }
}

//if height is 300px, add descrp
// function htmlDescription() {
//   if($(".skillBar"))
// }
function keySkillsLoad() {
  var inview = new Waypoint.Inview({
    element: $('#cssJS')[0],
    entered: function(direction) {
      if (keySkillsLoaded == 0){
        htmlMove();
        cssMove();
        photoshopMove();
        javascriptMove();
        googlinessMove();
        teaMove();
        keySkillsLoaded++;
      }
    }
  })
}

var keySkillsLoaded = 0;

function pageLoaded() {
  getJoke();
  keySkillsLoad();
}

document.addEventListener("DOMContentLoaded", function() {
  pageLoaded();
  $(".portfolioCarousel").slick({
    adaptiveHeight: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    fade: true,
    cssEase: "linear"
  });
});

// $(document).ready(function(){
//
// });
