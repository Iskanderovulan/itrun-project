$('.mobile-btn').on('click', function () {
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.menu__nav').toggleClass('show-menu__nav')
});

$('.menu__nav li a').on('click', function () {
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.menu__nav').removeClass('show-menu__nav')
});

$(document).ready(function () {
    $(".menu__nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(document).ready(function () {
    $(".footer__items").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var body = document.getElementById('body');
var modal = document.getElementById('myModal');
var btn2 = document.getElementById("myBtn-2");
var span = document.getElementsByClassName("close")[0];
btn2.onclick = function () {
    modal.style.display = "block";
}
btn2.onclick = function () {
    body.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('myModal');
var btn3 = document.getElementById("myBtn-3");
var span = document.getElementsByClassName("close")[0];
btn3.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var modal2 = document.getElementById('myModal-2');
var btn4 = document.getElementById("myBtn-4");
var span2 = document.getElementsByClassName("close-2")[0];
btn4.onclick = function () {
    modal2.style.display = "block";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

var modal3 = document.getElementById('myModal-3');
var btn5 = document.getElementById("myBtn-5");
var span3 = document.getElementsByClassName("close-3")[0];
btn5.onclick = function () {
    modal3.style.display = "block";
}
span3.onclick = function () {
    modal3.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}


var modal4 = document.getElementById('myModal-4');
var btn6 = document.getElementById("myBtn-6");
var span4 = document.getElementsByClassName("close-4")[0];

btn6.onclick = function () {
    modal4.style.display = "block";
}

span4.onclick = function () {
    modal4.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}

var modal5 = document.getElementById('myModal-5');
var btn7 = document.getElementById("myBtn-7");
var span5 = document.getElementsByClassName("close-5")[0];

btn7.onclick = function () {
    modal5.style.display = "block";
}

span5.onclick = function () {
    modal5.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}
















$('.card').dblclick(function () {
    $(this).toggleClass('flipped');
});












