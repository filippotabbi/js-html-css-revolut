



$('#feat-info').mouseover(function() {
    $('.about').stop(true, true).hide(400);
    $('.help').stop(true, true).hide(400);
    $('.plans').stop(true, true).hide(400);
    $('.features').stop(true, true).show(400);
}).mouseout(function() {
    $('.features').stop(true, true).show(400);
});
$('html').click(function() {
    $('.features').stop(true, true).hide(400);
});


$('#plans-info').mouseover(function() {
    $('.features').stop(true, true).hide(400);
    $('.about').stop(true, true).hide(400);
    $('.help').stop(true, true).hide(400);
    $('.plans').stop(true, true).show(400);
}).mouseout(function() {
    $('.plans').stop(true, true).show(400);
});
$('html').click(function() {
    $('.plans').stop(true, true).hide(400);
});


$('#about-info').mouseover(function() {
    $('.features').stop(true, true).hide(400);
    $('.help').stop(true, true).hide(400);
    $('.plans').stop(true, true).hide(400);
    $('.about').stop(true, true).show(400);
}).mouseout(function() {
    $('.about').stop(true, true).show(400);
});
$('html').click(function() {
    $('.about').stop(true, true).hide(400);
});


$('#help-info').mouseover(function() {
    $('.features').stop(true, true).hide(400);
    $('.about').stop(true, true).hide(400);
    $('.plans').stop(true, true).hide(400);
    $('.help').stop(true, true).show(400);
}).mouseout(function() {
    $('.help').stop(true, true).show(400);
});
$('html').click(function() {
    $('.help').stop(true, true).hide(400);
});
