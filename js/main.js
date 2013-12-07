(function($) {
    var list_len = $('ul.slider li').length,
        cur = 0;


    for (var i = 0, ii = list_len; i < ii; i++) {
        $('#home .dots').append('<div class="dot" />');
    }
    $($('#home .dots .dot')[0]).addClass('current-dot');

    $('.arrow-right').click(function(e) {
        e.preventDefault();
        cur = cur < list_len - 1 ? ++cur : 0;
        change(cur);
    });

    $('.arrow-left').click(function(e) {
        e.preventDefault();
        cur = cur > 0 ? --cur : list_len - 1;
        change(cur);
    });

    function change(cur) {
        var cur_el = $($('ul.slider li')[cur]),
            old_el = $($('ul.slider li')[cur - 1]),
            new_bg = cur_el.data('bgurl'),
            new_cont = cur_el.html(),
            changedEl = $('#home');

        $($('ul.slider li')).each(function() {
            $(this).removeClass('visible');
        });
        $($('#home .dots .dot')).each(function() {
            $(this).removeClass('current-dot');
        });
        cur_el.addClass('visible');
        $($('#home .dots .dot')[cur]).addClass('current-dot');
        changedEl.css({
            'background-image': 'url(' + new_bg + ')'
        });
        //changedEl.html(cur_el.html());

        /*
        $('#home').animate({opacity: 0}, 500, function(){
                $(this)
                    .css({'background-image': 'url('+new_bg+')'})
                    .animate({opacity: 1});
            });
        */
    }

    // portfolio 
    $('.portfolio header ul li a').click(function(e) {
        e.preventDefault();

        if ($(this).hasClass('active')) {
            return;
        }

        console.log(e);
        console.log($(this));

        $('.portfolio header ul li a').each(function() {
            $(this).removeClass('active');
        });
        $('.portfolio-content > div').each(function() {
            $(this).hide(500);
        });

        $('.portfolio-content .' + $(this).attr('class').substr(4)).show(500);

        console.log($(this).attr('class'));

        $(this).addClass('active');

    });

})(jQuery);
