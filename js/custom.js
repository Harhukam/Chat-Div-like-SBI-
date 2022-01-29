  // ******************************************
// use for hide  all icon show perticuller content
// ******************************************
   $(function(){
$("#icon1").click(function () {
          $('.bg_none').addClass('hide');
		  $('.newboxes').removeClass('hide');
            });

$("#icon2").click(function () {
          $('.bg_none').addClass('hide');
		  $('.newboxes').removeClass('hide');
            });


$("#icon3").click(function () {
          $('.bg_none').addClass('hide');
		  $('.newboxes').removeClass('hide');
            });


$("#icon4").click(function () {
          $('.bg_none').addClass('hide');
		  $('.newboxes').removeClass('hide');
            });


$("#icon5").click(function () {
          $('.bg_none').addClass('hide');
		  $('.newboxes').removeClass('hide');
            });


$("#icon6").click(function () {
          $('.bg_none').addClass('hide');
		  $('.newboxes').removeClass('hide');
            });


$("#icon7").click(function () {
          $('.bg_none').addClass('hide');
		  $('.newboxes').removeClass('hide');
            });

$("#icon8").click(function () {
          $('.bg_none').addClass('hide');
		  $('.newboxes').removeClass('hide');
            });

$("#icon9").click(function () {
          $('.bg_none').addClass('hide');
		  $('.newboxes').removeClass('hide');
            });
/*

$("#icon1").click(function () {
            $('.icon2desc').addClass('abc');
            $('.icon3desc').addClass('abc');
            $('.icon4desc').addClass('abc');
            $('.icon5desc').addClass('abc');
            $('.icon6desc').addClass('abc');
            $('.icon7desc').addClass('abc');
            $('.icon8desc').addClass('abc');
            $('.icon9desc').addClass('abc');
            });


$("#icon2").click(function () {
            $('.icon1desc').addClass('abc');
            $('.icon3desc').addClass('abc');
            $('.icon4desc').addClass('abc');
            $('.icon5desc').addClass('abc');
            $('.icon6desc').addClass('abc');
            $('.icon7desc').addClass('abc');
            $('.icon8desc').addClass('abc');
            $('.icon9desc').addClass('abc');
            });

$("#icon3").click(function () {
            $('.icon2desc').addClass('abc');
            $('.icon3desc').addClass('abc');
            $('.icon4desc').addClass('abc');
            $('.icon5desc').addClass('abc');
            $('.icon6desc').addClass('abc');
            $('.icon7desc').addClass('abc');
            $('.icon8desc').addClass('abc');
            $('.icon9desc').addClass('abc');
            });

$("#icon4").click(function () {
            $('.icon1desc').addClass('abc');
            $('.icon2desc').addClass('abc');
            $('.icon3desc').addClass('abc');
            $('.icon5desc').addClass('abc');
            $('.icon6desc').addClass('abc');
            $('.icon7desc').addClass('abc');
            $('.icon8desc').addClass('abc');
            $('.icon9desc').addClass('abc');
            });

$("#icon5").click(function () {
            $('.icon1desc').addClass('abc');
            $('.icon2desc').addClass('abc');
            $('.icon3desc').addClass('abc');
            $('.icon4desc').addClass('abc');
            $('.icon6desc').addClass('abc');
            $('.icon7desc').addClass('abc');
            $('.icon8desc').addClass('abc');
            $('.icon9desc').addClass('abc');
            });


$("#icon6").click(function () {
            $('.icon1desc').addClass('abc');
            $('.icon2desc').addClass('abc');
            $('.icon3desc').addClass('abc');
            $('.icon4desc').addClass('abc');
            $('.icon5desc').addClass('abc');
            $('.icon7desc').addClass('abc');
            $('.icon8desc').addClass('abc');
            $('.icon9desc').addClass('abc');
            });

$("#icon7").click(function () {
            $('.icon1desc').addClass('abc');
            $('.icon2desc').addClass('abc');
            $('.icon3desc').addClass('abc');
            $('.icon4desc').addClass('abc');
            $('.icon5desc').addClass('abc');
            $('.icon6desc').addClass('abc');
            $('.icon8desc').addClass('abc');
            $('.icon9desc').addClass('abc');
            });


$("#icon8").click(function () {
            $('.icon1desc').addClass('abc');
            $('.icon2desc').addClass('abc');
            $('.icon3desc').addClass('abc');
            $('.icon4desc').addClass('abc');
            $('.icon5desc').addClass('abc');
            $('.icon6desc').addClass('abc');
            $('.icon7desc').addClass('abc');
            $('.icon9desc').addClass('abc');
            });


$("#icon9").click(function () {
            $('.icon1desc').addClass('abc');
            $('.icon2desc').addClass('abc');
            $('.icon3desc').addClass('abc');
            $('.icon4desc').addClass('abc');
            $('.icon5desc').addClass('abc');
            $('.icon6desc').addClass('abc');
            $('.icon7desc').addClass('abc');
            $('.icon8desc').addClass('abc');
            });

*/
          
            $("#back").click(function () {
				$('.bg_none').removeClass('hide');
				 $('.newboxes').addClass('hide');
            });
  }) 



//   $(function(){
// $("#icon2").click(function () {
//           $('.bg_none').addClass('hide');
//             });
          
//             $("#back").click(function () {
//           $('.bg_none').removeClass('hide');
//             });
//   })

// ******************************************
//use for open or close chat popup
// ******************************************


$(document).ready(function() {
        $('#popup').click(function() {
                $('.popupchat').toggle("slide");
        });
    });


// ******************************************
// use for display icon one detail only
// ******************************************

 /*   $(document).ready(function() {
        $('#icon1').click(function() {
                $('.icon1desc').toggle("slide");
        });

        $('#icon2').click(function() {
                $('.icon2desc').toggle("slide");
        });

        $('#icon3').click(function() {
                $('.icon3desc').toggle("slide");
        });


        $('#icon4').click(function() {
                $('.icon4desc').toggle("slide");
        });

        $('#icon5').click(function() {
                $('.icon5desc').toggle("slide");
        });



        $('#icon6').click(function() {
                $('.icon6desc').toggle("slide");
        });



        $('#icon7').click(function() {
                $('.icon7desc').toggle("slide");
        });



        $('#icon8').click(function() {
                $('.icon8desc').toggle("slide");
        });



        $('#icon9').click(function() {
                $('.icon9desc').toggle("slide");
        });


    }); */


// ********************************************
//
// ********************************************
/* 
$(function(){
$("#detail1").click(function () {
          $('.bg_none').addClass('hide');
            });
          
            $("#backtoicon").click(function () {
          $('.bg_none').removeClass('hide');
            });
  }) */
  
  
  
  
  function showonlyone(thechosenone) {
     $('.newboxes').each(function(index) {
          if ($(this).attr("id") == thechosenone) {
               $(this).show(200);
          }
          else {
               $(this).hide(600);
          }
     });
}