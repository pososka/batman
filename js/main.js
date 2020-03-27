$(document).ready(function () {

    $('body').on('click', '.tabs-item', function () {
        event.preventDefault();

        let tabActiveId = $(this).attr('href');
        $('.visible').removeClass('visible');
        $(tabActiveId).addClass('visible');
        $('.tabs-item-active').removeClass('tabs-item-active');
        $(this).addClass('tabs-item-active');
    });

});