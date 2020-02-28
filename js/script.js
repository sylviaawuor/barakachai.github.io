// $(".mobile-menu-icon").click(function(){
//     $(".mobile-menu").slideToggle();
// });


$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});


$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link2');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu2').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});

$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link3');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu3').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});


$(document).ready(function(){



    $('.bxslider').bxSlider({adaptiveHeight:true, mode:'horizontal', auto:true, speed: 500,  pause: 6000});

    $('select').niceSelect();




    $(".search-icon.fa.fa-search").click(function(){
        $(".search-wrap").slideToggle();
    });

    $(".search-wrap button").click(function(){
        $(".search-wrap").slideUp();
    });

    $(".billing-details ul li").click(function(){
        $(".password").slideToggle();
    });


    $(".drop-bars.fa-bars").click(function(){
        $(".hidden-mobile").slideToggle();
    });


});


jQuery(document).ready(function($) {

    $('input').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
        increaseArea: '20%' // optional
    });


    $("#owl-example").owlCarousel({
        navigation:true,
        navigationText:false,
        pagination:false,
        autoPlay:	true
    });








});


jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

});












$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link3');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu3').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});




$('.close1').on('click', function() {

    // The Overlay fades out slower

    $(".first-tr").slideUp('slow');

});

$('.close2').on('click', function() {

    // The Overlay fades out slower

    $(".second-tr").slideUp('slow');

});

$('.close3').on('click', function() {

    // The Overlay fades out slower

    $(".third-tr").slideUp('slow');

});

$('.close4').on('click', function() {

    // The Overlay fades out slower

    $(".fourth-tr").slideUp('slow');

});

$('.input_class_checkbox').each(function(){
    $(this).hide().after('<div class="class_checkbox" />');

});

$('.class_checkbox').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox2').each(function(){
    $(this).hide().after('<div class="class_checkbox2" />');

});

$('.class_checkbox2').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox3').each(function(){
    $(this).hide().after('<div class="class_checkbox3" />');

});

$('.class_checkbox3').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox4').each(function(){
    $(this).hide().after('<div class="class_checkbox4" />');

});

$('.class_checkbox4').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox5').each(function(){
    $(this).hide().after('<div class="class_checkbox5" />');

});

$('.class_checkbox5').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox6').each(function(){
    $(this).hide().after('<div class="class_checkbox6" />');

});

$('.class_checkbox6').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox7').each(function(){
    $(this).hide().after('<div class="class_checkbox7" />');

});

$('.class_checkbox7').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox8').each(function(){
    $(this).hide().after('<div class="class_checkbox8" />');

});

$('.class_checkbox8').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox9').each(function(){
    $(this).hide().after('<div class="class_checkbox9" />');

});

$('.class_checkbox9').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox10').each(function(){
    $(this).hide().after('<div class="class_checkbox10" />');

});

$('.class_checkbox10').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox11').each(function(){
    $(this).hide().after('<div class="class_checkbox11" />');

});

$('.class_checkbox11').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox12').each(function(){
    $(this).hide().after('<div class="class_checkbox12" />');

});

$('.class_checkbox12').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});




$('.input_class_checkbox13').each(function(){
    $(this).hide().after('<div class="class_checkbox13" />');

});

$('.class_checkbox13').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox14').each(function(){
    $(this).hide().after('<div class="class_checkbox14" />');

});

$('.class_checkbox14').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox15').each(function(){
    $(this).hide().after('<div class="class_checkbox15" />');

});

$('.class_checkbox15').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox16').each(function(){
    $(this).hide().after('<div class="class_checkbox16" />');

});

$('.class_checkbox16').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox17').each(function(){
    $(this).hide().after('<div class="class_checkbox17" />');

});

$('.class_checkbox17').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox18').each(function(){
    $(this).hide().after('<div class="class_checkbox18" />');

});

$('.class_checkbox18').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox19').each(function(){
    $(this).hide().after('<div class="class_checkbox19" />');

});

$('.class_checkbox19').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox20').each(function(){
    $(this).hide().after('<div class="class_checkbox20" />');

});

$('.class_checkbox20').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox21').each(function(){
    $(this).hide().after('<div class="class_checkbox21" />');

});

$('.class_checkbox21').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox22').each(function(){
    $(this).hide().after('<div class="class_checkbox22" />');

});

$('.class_checkbox22').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox23').each(function(){
    $(this).hide().after('<div class="class_checkbox23" />');

});

$('.class_checkbox23').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox24').each(function(){
    $(this).hide().after('<div class="class_checkbox24" />');

});

$('.class_checkbox24').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox25').each(function(){
    $(this).hide().after('<div class="class_checkbox25" />');

});

$('.class_checkbox25').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox26').each(function(){
    $(this).hide().after('<div class="class_checkbox26" />');

});

$('.class_checkbox26').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox27').each(function(){
    $(this).hide().after('<div class="class_checkbox27" />');

});

$('.class_checkbox27').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox28').each(function(){
    $(this).hide().after('<div class="class_checkbox28" />');

});

$('.class_checkbox28').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox29').each(function(){
    $(this).hide().after('<div class="class_checkbox29" />');

});

$('.class_checkbox29').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox30').each(function(){
    $(this).hide().after('<div class="class_checkbox30" />');

});

$('.class_checkbox30').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox31').each(function(){
    $(this).hide().after('<div class="class_checkbox31" />');

});

$('.class_checkbox31').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox32').each(function(){
    $(this).hide().after('<div class="class_checkbox32" />');

});

$('.class_checkbox32').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox33').each(function(){
    $(this).hide().after('<div class="class_checkbox33" />');

});

$('.class_checkbox33').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox34').each(function(){
    $(this).hide().after('<div class="class_checkbox34" />');

});

$('.class_checkbox34').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox35').each(function(){
    $(this).hide().after('<div class="class_checkbox35" />');

});

$('.class_checkbox35').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox36').each(function(){
    $(this).hide().after('<div class="class_checkbox36" />');

});

$('.class_checkbox36').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

$('.input_class_checkbox37').each(function(){
    $(this).hide().after('<div class="class_checkbox37" />');

});

$('.class_checkbox37').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});

