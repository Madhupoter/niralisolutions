$(window).scroll(function(){
    if ($(this).scrollTop() > 0) {
      
       $('.header').css('position', 'fixed');
       $('.logo img').css('width', '130px');
    //    $('#header').css('background', '#015f7f');
       $('#header').css('z-index', '99999999999');
       $('.header').css('padding', '15px 30px 10px 30px');
       $('.navbar-nav').css('margin-top', '20px');
       $('.contactDetails').css('display', 'none');
      //  $('.carousel-item img').css('height', '650px');

    } else {
     
       $('.header').css('position', 'relative');
       $('.logo img').css('width', '200px');
    //    $('#header').css('background', 'none');
       $('#header').css('z-index', '99999999999');
    //    $('#header').css('padding', '30px 30px');
       $('.header').css('padding', '30px 30px 10px 30px');
       $('.navbar-nav').css('margin-top', '0px');
       $('.contactDetails').css('display', 'flex');
      //  $('.carousel-item img').css('height', 'auto');
    }
});