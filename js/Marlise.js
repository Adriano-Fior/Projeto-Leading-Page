function ativaScrollSuave(selector) { 
    $(selector).click(function(event){
        event.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);  
    });
} 
 
ativaScrollSuave('a[href*=secao-sobre]');
ativaScrollSuave('a[href*=secao-paraquem]');
ativaScrollSuave('a[href*=secao-contato]');  
ativaScrollSuave('a[href*=Saiba-mais]'); 
