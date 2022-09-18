  $(document).ready(function(){
      $("#allBtn").click(function(){
      $("#appDesign").show(1000);
      $("#webDesign").show(1000);
      $("#appDesign-01").show(1000);
      $("#myDesign").show(1000);
      $("#uiDesign").show(1000);
      $("#psDesign").show(1000);
    });
    $("#appBtn").click(function(){
      $("#appDesign").show(1000);
      $("#webDesign").hide(1000);
      $("#appDesign-01").show(1000);
      $("#myDesign").hide(1000);
      $("#uiDesign").hide(1000);
      $("#psDesign").hide(1000);
    });
    $("#webBtn").click(function(){
      $("#appDesign").hode(1000);
      $("#webDesign").hide(1000);
      $("#appDesign-01").hide(1000);
      $("#myDesign").hide(1000);
      $("#uiDesign").hide(1000);
      $("#psDesign").hide(1000);
    });
    $("#uiBtn").click(function(){
      $("#appDesign").hide(1000);
      $("#webDesign").hide(1000);
      $("#appDesign-01").hide(1000);
      $("#myDesign").hide(1000);
      $("#uiDesign").show(1000);
      $("#psDesign").hide(1000);
    });
    $("#psBtn").click(function(){
      $("#appDesign").hide(1000);
      $("#webDesign").hide(1000);
      $("#appDesign-01").hide(1000);
      $("#myDesign").hide(1000);
      $("#uiDesign").hide(1000);
      $("#psDesign").show(1000);
    });
  });

 /* // Gallery Filter JQuery Codes
  var $grid = $('.grid').isotope({

  });
  
  // filter items on button click
  $('.gallery-btn-area').on( 'click', 'li', function() {
    $(this).addClass('active').siblings().removeClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $('.grid').isotope({
    itemSelector: '.gallery-item',
    percentPosition: true,
    masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.gitem'
    }
  }); */


  $('.owl-carousel').owlCarousel({
    /*loop:true,*/
    margin:10,
    nav:true,
    dots:true,
    navText:["PREV","NEXT"],
    /*autoplay:true,
    autoplayTimeout:10000,*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })