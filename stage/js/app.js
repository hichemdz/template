$(() => {
 const userChat = $('#ul_users'),
       windowH = $(window).height(),
       header = $('header').outerHeight(true),
       bodyHeader = $('.body-user .alert').outerHeight(true),
       userBodyH = $('.heard-user').outerHeight(true);
       userChat.css("height",windowH - 240.2) ;
   // resze
   $(window).resize(function () {
       const userChat = $('.content .body-user ul'),
               windowH = $(window).height(),
               header = $('header').outerHeight(true),
               bodyHeader = $('.body-user .alert').outerHeight(true),
               userBodyH = $('.heard-user').outerHeight(true);
       var x = header+bodyHeader;
               userChat.innerHeight(windowH - 240.2) ;
     })
  // heeader
      userChat.innerHeight(windowH - 240.2);
  // show hide aside
  $('#customSwitch1').change( function () {
      $('.wrapper').toggleClass('sideL-show')
     })

  $('.nav-item').click(function (){
    $(this).each(function (){
        $(this).addClass('active').siblings().removeClass('active');
    })
  });
  // nice scroole
  $('body').niceScroll({
  });
  $('.list-unstyled').niceScroll({
  });
  // coursoul
   $('.owl-carousel').owlCarousel({
       center: false,
       items:2,
       //loop:,
       margin:10,
       responsive:{
         0:{
               items:5,
               nav:false
           },
          768:{
            items:3,
          },
           600:{
               items:6,
               nav:false
           },
           1000:{
               items:5,
               nav:false,
               loop:false
           }
       }
   });

})
