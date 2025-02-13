$(function() {

    // console.log('test');

    $('.lOrder-acd').on('click', function() {
        let panel = $(this).find('p');
        let panelHeight = panel.prop('scrollHeight'); 
        if(panel.css('max-height') !== '0px') { 
            panel.css('max-height', '0px');
            panel.css('margin', '0 auto');
            panel.css('opacity', '0');
        } else {
            panel.css('max-height', panelHeight + 'px');
            panel.css('margin', '8px auto 0 auto');
            panel.css('opacity', '1');
        }
        $(this).toggleClass('lOrder-acd-on');
    });
});
