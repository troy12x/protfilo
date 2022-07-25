// 
var PreLoader;

function myFunction() {
  PreLoader = setTimeout(PreLoaderShowPage, 2500);
}

function PreLoaderShowPage() {
  $("#loader").fadeOut();
  $("#main").fadeIn();
}

$(window).on('load', function () {
  PreLoaderShowPage();
})


// Navbar Toggle Script
$( "#ToggleNav" ).click(function() {
    var height = $(".navbar-nav ").height();
    var heightBTN = $("#btn_Download").height();
    var ButtonGap = 16;
    var ALL = height + heightBTN + ButtonGap + 20;
    var AnimationTime = 300;
    var Navbar_Collapse =  "#navbar_collapse";
    if ($(Navbar_Collapse).hasClass("Show")) {
        setTimeout(() => {
            $(Navbar_Collapse).addClass("visibility_hidden");
        }, AnimationTime);
        $(Navbar_Collapse).removeClass("visibility_visible");
        $(Navbar_Collapse).removeClass("Show");
        $("#ToggleNav").removeClass("open");
        $(Navbar_Collapse).animate({
          opacity: 1,
          height: 0
        }, AnimationTime, function() {
          // Animation complete.
        });
        return false;
    }
    $(Navbar_Collapse).removeClass("visibility_hidden");
    $(Navbar_Collapse).addClass("visibility_visible");
    $(Navbar_Collapse).addClass("Show");
    $("#ToggleNav").addClass("open");
    $(Navbar_Collapse).animate({
      opacity: 1,
      height: `${ALL}`
    }, AnimationTime, function() {
      // Animation complete.
    });
  });

// Navbar Links Active


var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll(".navbar .navbar-nav .nav-item a").forEach((el) => {
    el.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  // console.log(id);
  var selector = `.navbar .navbar-nav .nav-item a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};

var navLinks = document.querySelectorAll(".navbar .navbar-nav .nav-item a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    // section.scrollIntoView({
    //   behavior: "smooth",
    // });

    window.scroll({
      top: sectionPos - 50,
      behavior: "smooth",
    });
  });
});
