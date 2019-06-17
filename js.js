$("#arrow").on("click", function() {
  $("body, html").animate(
    {
      scrollTop: $("main").offset().top
    },
    700
  );
});

$("#about").on("click", function() {
  $("body, html").animate(
    {
      scrollTop: $(".me").offset().top
    },
    500
  );
  $("nav").fadeOut();
});

$("#portfolio").on("click", function() {
  $("body, html").animate(
    {
      scrollTop: $(".ex").offset().top
    },
    500
  );
  $("nav").fadeOut();
});

$("#skill").on("click", function() {
  $("body, html").animate(
    {
      scrollTop: $(".skill").offset().top
    },
    500
  );
  $("nav").fadeOut();
});

$("#contact").on("click", function() {
  $("body, html").animate(
    {
      scrollTop: $(".contact").offset().top
    },
    500
  );
  $("nav").fadeOut();
});

$(document).ready(function() {
  $("#nav-bar-button").click(function() {
    $("nav").fadeToggle();
  });
});

$(document).ready(function() {
  $("body")
    .hide()
    .fadeIn();
});

/*$("oko").ready(function(){
	if(scrollTop<$("header").offset().top) $("oko").style.color="red";				NIE DZIAŁA KOMPLETNIE----------------------------
	else if(scrollTop>$("header").offset().top) $("ok").style.color="red";
}

/*$(document).ready(function(){
    $("#arrow").click(function(){
	$("body, html").animate({
	scrollTop: $("main").offset().top
	}, 600)
})
}); 										DZIAŁA ALE LESPZE TAMTO NA GÓRZE ;)





*/
